import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"
import { rehypeComponent } from "@lib/rehype-component"

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
    theme: 'github-dark',
    onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and allow empty
        // lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }]
        }
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

                        node.__rawString__ = codeEl.children?.[0].value
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

                        preElement.properties["__rawString__"] = node.__rawString__
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