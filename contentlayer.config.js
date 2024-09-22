import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from "remark-gfm"

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
        node.properties.style = (node.properties.style || '') + 'padding: 0.125rem 0px';
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }]
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className.push("line--highlighted")
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
            [rehypePrettyCode, options],
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