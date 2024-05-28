import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Positive Post",
  description: "Send a positive message to someone and get one in return.",
  authors: [{ name: "Robert", url: "https://robert-chapman.vercel.app" }],
  applicationName: "Positive Post",
  referrer: "origin-when-cross-origin",
  creator: "Robert Chapman",
  publisher: "Robert Chapman",
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-background`}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
