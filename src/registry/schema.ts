import { z } from "zod"

export const blockChunkSchema = z.object({
    name: z.string(),
    description: z.string(),
    component: z.any(),
    file: z.string(),
    code: z.string().optional(),
    container: z
        .object({
            className: z.string().nullish(),
        })
        .optional(),
})

export const registryEntrySchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    dependencies: z.array(z.string()).optional(),
    devDependencies: z.array(z.string()).optional(),
    registryDependencies: z.array(z.string()).optional(),
    files: z.array(z.string()),
    source: z.string().optional(),
    type: z.enum([
        "components:ui",
        "components:example",
    ]),
    category: z.string().optional(),
    subcategory: z.string().optional(),
    chunks: z.array(blockChunkSchema).optional(),
})

export const registrySchema = z.array(registryEntrySchema)

export type RegistryEntry = z.infer<typeof registryEntrySchema>

export type Registry = z.infer<typeof registrySchema>

export type BlockChunk = z.infer<typeof blockChunkSchema>
