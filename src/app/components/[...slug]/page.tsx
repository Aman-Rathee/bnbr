import React from 'react'
import { allDocs } from 'contentlayer/generated'
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Button from '@/components/Button'
import { cn } from '@/components/lib/utils'
import { notFound } from 'next/navigation'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Mdx } from '@/components/mdx-components'


interface DocsPageProps {
    params: {
        slug: string[]
    }
}
const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    // Add a custom component.
    MyComponent: () => <div>Hello World!</div>,
}


function getDocFromParams({ params }: DocsPageProps) {
    const slug = params.slug?.join("/") || ""
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)

    if (!doc) return null

    return doc
}

export async function generateStaticParams(): Promise<DocsPageProps["params"][]> {
    return allDocs.map((doc) => ({
        slug: doc.slugAsParams.split("/"),
    }))
}


export function generateMetadata({ params }: DocsPageProps) {
    const doc = getDocFromParams({ params })
    // const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
    if (!doc) {
        return null
    }
    return {
        title: doc.title,
        description: doc.description
    }
}


export default function DocPage({ params }: DocsPageProps) {
    const doc = getDocFromParams({ params })

    if (!doc) notFound()


    return (
        <>
            <main className="relative py-6">
                <div className="mx-auto w-full min-w-0">
                    <div className="space-y-2">
                        <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
                            {doc.title}
                        </h1>
                        {doc.description && (
                            <p className="text-base pt-1 text-white/50">
                                {doc.description}
                            </p>
                        )}
                    </div>
                    <div className="pb-12 pt-8">
                        <Mdx code={doc.body.code} />
                    </div>
                </div>
            </main>
        </>
    )
}
