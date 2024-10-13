import { Registry } from "@/registry/schema"
import { ui } from "@/registry/ui"
import { examples } from "./examples"

export const registry: Registry = [...ui, ...examples]
