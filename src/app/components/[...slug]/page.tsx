import React from 'react'
import { allDocs } from 'contentlayer/generated'
import { cn } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx-components'
import "@/styles/mdx.css"


interface DocsPageProps {
    params: {
        slug: string[]
    }
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


export async function generateMetadata(props: DocsPageProps) {
    const params = await props.params;
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


export default async function DocPage(props: DocsPageProps) {
    const params = await props.params;
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
                            <p className="text-base pt-1 text-muted-foreground">
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
