// app/layout.tsx
import * as React from "react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main className="container mx-auto p-6 ">{children}</main>
    </>
  );
}
