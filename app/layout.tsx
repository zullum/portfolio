import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanel Zulic - Senior Developer Portfolio",
  description: "Full-stack developer specializing in React, Next.js, Node.js, and cloud technologies. View my projects and experience.",
  keywords: ["Sanel Zulic", "Senior Developer", "Full Stack", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Sanel Zulic" }],
  creator: "Sanel Zulic",
  metadataBase: new URL("https://sanelzulic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanelzulic.com",
    title: "Sanel Zulic - Senior Developer Portfolio",
    description: "Full-stack developer specializing in React, Next.js, Node.js, and cloud technologies. View my projects and experience.",
    siteName: "Sanel Zulic Portfolio",
    images: [
      {
        url: "/sanelzulic.png",
        width: 1200,
        height: 630,
        alt: "Sanel Zulic - Senior Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanel Zulic - Senior Developer Portfolio",
    description: "Full-stack developer specializing in React, Next.js, Node.js, and cloud technologies. View my projects and experience.",
    images: ["/sanelzulic.png"],
    creator: "@sanelzulic",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}