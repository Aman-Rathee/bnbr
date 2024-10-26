"use client"

import React from 'react'
import { Index } from "../../__registry__"
import { cn } from '../lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { CopyButton } from './copy-button'
import { Icons } from './Icons'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    description?: string
    hideCode?: boolean
}

export default function ComponentPreview({ name, description, children, className, hideCode = false, ...props }: ComponentPreviewProps) {

    const Codes = React.Children.toArray(children) as React.ReactElement[]
    const Code = Codes[0]

    const Preview = React.useMemo(() => {
        const Component = Index['bnbr'][name]?.component

        if (!Component) {
            return (
                <p className="text-sm">
                    Component{" "}
                    <code className="relative rounded text-red-400">
                        {name}
                    </code>{" "}
                    not found in registry.
                </p>
            )
        }

        return <Component />
    }, [name])

    const codeString = React.useMemo(() => {
        if (
            typeof Code?.props["data-rehype-pretty-code-figure"] !== "undefined"
        ) {
            const [Button] = React.Children.toArray(
                Code.props.children
            ) as React.ReactElement[]
            return Button?.props?.value || Button?.props?.__rawString__ || null
        }
    }, [Code])

    return (
        <>
            <div
                className={cn("relative mb-16 flex flex-col space-y-2", className)}
                {...props}
            >
                <Tabs defaultValue="preview" className="relative pt-2 mr-auto w-full">
                    <div className="flex items-center justify-between pb-3">
                        {!hideCode && (
                            <TabsList className="w-full justify-start rounded-none border-b-2 border-border bg-transparent p-0">
                                <TabsTrigger value="preview" className="text-base">
                                    Preview
                                </TabsTrigger>
                                <TabsTrigger value="code" className="text-base">
                                    Code
                                </TabsTrigger>
                            </TabsList>
                        )}
                    </div>
                    <TabsContent value="preview" className="relative rounded-md border-2 border-border">
                        <div className="flex items-center justify-end pr-8 pt-4">
                            <div className="flex items-center gap-2">
                                <CopyButton
                                    value={codeString}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className={cn("flex min-h-[350px] w-full justify-center p-10 items-center")}                        >
                            <React.Suspense
                                fallback={
                                    <div className="flex w-full items-center justify-center text-sm">
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        Loading...
                                    </div>
                                }
                            >
                                {Preview}
                            </React.Suspense>
                        </div>
                    </TabsContent>
                    <TabsContent value="code" className="relative rounded-md border-transparent">
                        <div className="flex flex-col space-y-4">
                            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                                {Code}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
