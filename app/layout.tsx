import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Assignment/Report Editor",
  description:
    "A comprehensive lab report management system for academic assignments and research documentation",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
