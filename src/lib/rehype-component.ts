import { Index } from "../../__registry__"
import fs from "fs"
import { Node } from "node_modules/unist-builder/lib"
import path from "path"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

export interface UnistNode extends Node {
    type: string
    name?: string
    tagName?: string
    value?: string
    properties?: {
        __rawString__?: string
        __className__?: string
        [key: string]: unknown
    }
    attributes?: {
        name: string
        value: unknown
        type?: string
    }[]
    children?: UnistNode[]
}

export interface UnistTree extends Node {
    children: UnistNode[]
}


export function rehypeComponent() {
    return async (tree: UnistTree) => {
        visit(tree, (node: UnistNode) => {

            // src prop overrides both name and fileName.
            const { value: srcPath } =
                (getNodeAttributeByName(node, "src") as {
                    name: string
                    value?: string
                    type?: string
                }) || {}

            if (node.name === "ComponentSource") {
                const name = getNodeAttributeByName(node, "name")?.value as string
                const fileName = getNodeAttributeByName(node, "fileName")?.value as | string | undefined

                if (!name && !srcPath) {
                    return null
                }

                try {
                    let src: string

                    if (srcPath) {
                        src = srcPath
                    } else {
                        const component = Index['bnbr'][name]
                        src = fileName
                            ? component.files.find((file: string) => {
                                return (
                                    file.endsWith(`${fileName}.tsx`) ||
                                    file.endsWith(`${fileName}.ts`)
                                )
                            }) || component.files[0]
                            : component.files[0]
                    }

                    // Read the source file.
                    const filePath = path.join(process.cwd(), src)
                    let source = fs.readFileSync(filePath, "utf8")

                    // Replace imports.
                    // TODO: Use @swc/core and a visitor to replace this.
                    // For now a simple regex should do.
                    source = source.replaceAll(
                        `@/registry/bnbr/`,
                        "@/components/"
                    )
                    source = source.replaceAll("export default", "export")

                    // Add code as children so that rehype can take over at build time.
                    node.children?.push(
                        u("element", {
                            tagName: "pre",
                            properties: {
                                __src__: src,
                            },
                            attributes: [
                                {
                                    name: "styleName",
                                    type: "mdxJsxAttribute",
                                    value: 'bnbr',
                                },
                            ],
                            children: [
                                u("element", {
                                    tagName: "code",
                                    properties: {
                                        className: ["language-tsx"],
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            value: source,
                                        },
                                    ],
                                }),
                            ],
                        })
                    )
                } catch (error) {
                    console.error(error)
                }
            }

            if (node.name === "ComponentPreview") {
                const name = getNodeAttributeByName(node, "name")?.value as string

                if (!name) {
                    return null
                }

                try {
                    const component = Index['bnbr'][name]
                    const src = component.files[0]

                    // Read the source file.
                    const filePath = path.join(process.cwd(), src)
                    let source = fs.readFileSync(filePath, "utf8")

                    // Replace imports.
                    // TODO: Use @swc/core and a visitor to replace this.
                    // For now a simple regex should do.
                    source = source.replaceAll(
                        `@/registry/bnbr/ui/`,
                        "@/components/"
                    )
                    source = source.replaceAll("export default", "export")

                    // Add code as children so that rehype can take over at build time.
                    node.children?.push(
                        u("element", {
                            tagName: "pre",
                            properties: {
                                __src__: src,
                            },
                            children: [
                                u("element", {
                                    tagName: "code",
                                    properties: {
                                        className: ["language-tsx"],
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            value: source,
                                        },
                                    ],
                                }),
                            ],
                        })
                    )
                } catch (error) {
                    console.error(error)
                }
            }
        })
    }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
    return node.attributes?.find((attribute) => attribute.name === name)
}