import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import DeveloperCredits from "@/components/assignment/developer-credits";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alr-tsa.vercel.app"),
  title: {
    default: "Assignment/Report Editor",
    template: "%s | Assignment/Report Editor",
  },
  description:
    "A comprehensive lab report management system for academic assignments and research documentation. Create, edit, and manage your academic reports with ease.",
  keywords: [
    "assignment editor",
    "lab report",
    "academic writing",
    "research documentation",
    "report generator",
    "academic tools",
    "student assignments",
    "laboratory reports",
  ],
  authors: [{ name: "Tajwar Saiyeed Abid" }],
  creator: "Tajwar Saiyeed Abid",
  publisher: "Tajwar Saiyeed Abid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.jpeg", sizes: "any", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/logo.jpeg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alr-tsa.vercel.app",
    siteName: "Assignment/Report Editor",
    title: "Assignment/Report Editor - Academic Writing Made Easy",
    description:
      "A comprehensive lab report management system for academic assignments and research documentation. Create, edit, and manage your academic reports with ease.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Assignment/Report Editor - Academic Writing Tool",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@assignmentreport",
    creator: "@assignmentreport",
    title: "Assignment/Report Editor - Academic Writing Made Easy",
    description:
      "A comprehensive lab report management system for academic assignments and research documentation. Create, edit, and manage your academic reports with ease.",
    images: ["/logo.jpeg"],
  },
  category: "education",
  classification: "Academic Tool",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Assignment/Report Editor",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    description:
      "A comprehensive lab report management system for academic assignments and research documentation. Create, edit, and manage your academic reports with ease.",
    url: "https://alr-tsa.vercel.app",
    author: {
      "@type": "Organization",
      name: "Assignment Lab Report Team",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    applicationSubCategory: "Academic Writing Tool",
    downloadUrl: "https://alr-tsa.vercel.app",
    featureList: [
      "Lab report creation",
      "Assignment management",
      "Academic writing tools",
      "Research documentation",
      "Report templates",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://alr-tsa.vercel.app" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Assignment/Report Editor Updates"
          href="/feed.xml"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="AssignmentEditor" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased max-w-screen-2xl mx-auto`}>
        {children}
        <DeveloperCredits />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
