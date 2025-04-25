import Navbar from '@/components/Navbar';
import { docsConfig } from '@/components/config/docs';
import { DocsSidebarNav } from '@/components/side-bar';
import Footer from '@/components/Footer';


export default function ComponentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <Navbar />
                <div className='flex justify-center px-3 py-8'>
                    <div className='container flex-1 items-start md:grid md:max-w-[85rem] md:grid-cols-[240px_minmax(0,1fr)]'>
                        <aside className='hidden scrollbar-secondary md:block fixed md:sticky top-16 overflow-x-auto max-h-[calc(100vh-6rem)] w-full  '>
                            <DocsSidebarNav config={docsConfig} />
                        </aside>
                        <div>{children}</div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};