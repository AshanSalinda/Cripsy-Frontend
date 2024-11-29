import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TopNavbar />
            <div className="mt-20">{children}</div>
            <Footer />
        </>
    );
}