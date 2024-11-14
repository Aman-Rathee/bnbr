import Navbar from '@/components/Navbar';
import { docsConfig } from '@/components/config/docs';
import { DocsSidebarNav } from '@/components/side-bar';
import Footer from '@/components/Footer';


export default ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div>
                <Navbar />
                <div className='flex justify-center'>
                    <div className='container px-5 flex-1 items-start md:grid md:max-w-screen-xl md:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
                        <aside className='hidden py-4 scrollbar-secondary md:block fixed md:sticky top-16 -ml-2 overflow-x-auto max-h-[calc(100vh-6rem)] w-full  '>
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