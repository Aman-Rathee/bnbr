// @ts-nocheck
import { promises as fs } from "fs"
import path from "path"
import { Project } from "ts-morph"
import { tmpdir } from "os"
import { rimraf } from "rimraf"
import { registry } from "@/registry"
import { Registry, registrySchema } from "@/registry/schema"

const REGISTRY_PATH = path.join(process.cwd(), "public/registry")

const project = new Project({
    compilerOptions: {},
})

// ----------------------------------------------------------------------------
// Build __registry__/index.tsx.
// ----------------------------------------------------------------------------
async function buildRegistry(registry: Registry) {
    let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
`

    index += `  "bnbr": {`

    // Build 
    for (const item of registry) {
        const resolveFiles = item.files.map(
            (file) => `src/registry/bnbr/${file}`
        )
        const type = item.type.split(":")[1]
        let sourceFilename = ""

        let chunks: any = []

        let componentPath = `@/registry/bnbr/${type}/${item.name}`

        if (item.files) {
            const files = item.files.map((file) =>
                typeof file === "string"
                    ? { type: "registry:page", path: file }
                    : file
            )
            if (files?.length) {
                componentPath = `@/registry/bnbr/${files[0].path}`
            }
        }


        index += `
    "${item.name}": {
      name: "${item.name}",
      type: "${item.type}",
      registryDependencies: ${JSON.stringify(item.registryDependencies)},
      files: [${resolveFiles.map((file) => `"${file}"`)}],
      component: React.lazy(() => import("${componentPath}")),
      source: "${sourceFilename}",
      category: "${item.category}",
      subcategory: "${item.subcategory}",
      chunks: [${chunks.map(
            (chunk) => `{
        name: "${chunk.name}",
        description: "${chunk.description ?? "No description"}",
        component: ${chunk.component}
        file: "${chunk.file}",
        container: {
          className: "${chunk.container.className}"
        }
      }`
        )}]
    },`
    }

    index += `
  },`


    index += `
}
`

    // Write style index.
    rimraf.sync(path.join(process.cwd(), "__registry__/index.tsx"))
    await fs.writeFile(path.join(process.cwd(), "__registry__/index.tsx"), index)
}



try {
    const result = registrySchema.safeParse(registry)

    if (!result.success) {
        console.error(result.error)
        process.exit(1)
    }

    await buildRegistry(result.data)

    console.log("✅ Done!")
} catch (error) {
    console.error(error)
    process.exit(1)
}
