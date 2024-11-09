// app/layout.tsx
import * as React from "react";
import type { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        
        <meta name="testPage" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-100">
        
        <main className="container mx-auto p-4">{children}</main> 
        
      </body>
    </html>
  );
}
