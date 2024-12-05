import TopNavbar from "@/components/TopNavbar/TopNavbar";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">

            <div className="flex-shrink-0 z-50">
                <TopNavbar />
            </div>

            <div className="flex flex-1 overflow-hidden">
                <main className="flex-1 p-6 overflow-y-auto mt-20">
                    {children}
                </main>
            </div>
        </div>
    );
}