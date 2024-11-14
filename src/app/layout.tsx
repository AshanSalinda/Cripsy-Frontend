import type { Metadata } from "next";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar/TopNavbar";


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
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
