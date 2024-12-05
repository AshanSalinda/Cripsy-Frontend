/*
import "./globals.css";
import NavbarWrapper from "@/components/LayoutWrapper/NavbarWrapper";
import FooterWrapper from "@/components/LayoutWrapper/FooterWrapper";


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
        {/!* Meta Information *!/}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {/!* Navigation *!/}
         <NavbarWrapper/>

        {/!* Main Content *!/}
        <main className="min-h-screen">{children}</main>

        {/!* Footer *!/}
        <FooterWrapper/>
      </body>
    </html>
  );

}
*/

import type { Metadata } from "next";
import Toast from "@/components/Messages/showMessage";
import "./globals.css";



export const metadata: Metadata = {
    title: "Cripsy - Your E-commerce Site",
    description: "Discover amazing products at Cripsy.",
    icons:{
        icon: "/icon.png",
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <Toast/>
            </body>
        </html>
    );
}
