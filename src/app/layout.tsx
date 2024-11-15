import "./globals.css";
import TopNavbar from "@/components/TopNavbar/TopNavbar";

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
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body>
        <TopNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
