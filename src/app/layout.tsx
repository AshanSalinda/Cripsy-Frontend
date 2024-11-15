
import "./globals.css";
import TopNavbar from "@/components/TopNavbar/TopNavbar";

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
