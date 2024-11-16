import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper/NavbarWrapper";

export const metadata = {
    title: "Cripsy",
    description: "Discover amazing products at Cripsy.",
    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            {/* Metadata */}
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
            <link rel="icon" href={metadata.icons.icon}/>
        </head>
        <body>
        <NavbarWrapper/>
        <main>{children}</main>
        </body>
        </html>
    );
}
