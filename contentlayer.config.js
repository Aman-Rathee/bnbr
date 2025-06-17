import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"
import { rehypeComponent } from "@/lib/rehype-component"

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `docs/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: 'string', required: true },
        description: { type: "string", required: true, },
        date: { type: 'date', required: true },
    },
    computedFields: {
        slug: { type: 'string', resolve: (doc) => `${doc._raw.flattenedPath}` },
        slugAsParams: { type: "string", resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/") },
    },
}))

const options = {
    theme: 'andromeeda',
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and allow empty
        // lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }]
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className = ["line--highlighted"]
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ["word--highlighted"]
    },
};

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypeComponent,
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === "element" && node?.tagName === "pre") {
                        const [codeEl] = node.children
                        if (codeEl.tagName !== "code") {
                            return
                        }

                        if (codeEl.data?.meta) {
                            // Extract event from meta and pass it down the tree.
                            const regex = /event="([^"]*)"/
                            const match = codeEl.data?.meta.match(regex)
                            if (match) {
                                node.__event__ = match ? match[1] : null
                                codeEl.data.meta = codeEl.data.meta.replace(regex, "")
                            }
                        }

                        node.__rawString__ = codeEl.children?.[0].value
                        node.__src__ = node.properties?.__src__
                    }
                })
            },
            [rehypePrettyCode, options],
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === "element" && node?.tagName === "figure") {

                        if (!("data-rehype-pretty-code-figure" in node.properties)) {
                            return
                        }

                        const preElement = node.children.at(-1)
                        if (preElement.tagName !== "pre") {
                            return
                        }

                        preElement.properties["__withMeta__"] = node.children.at(0).tagName === "figcaption"
                        preElement.properties["__rawString__"] = node.__rawString__

                        if (node.__src__) {
                            preElement.properties["__src__"] = node.__src__
                        }

                        if (node.__event__) {
                            preElement.properties["__event__"] = node.__event__
                        }
                    }
                })
            },
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
})