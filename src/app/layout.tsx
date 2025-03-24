import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Modfy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="font-sans mx-auto max-w-7xl">
          <Navbar/>
          <div className="px-6 py-4">
            {children}
          </div>
        </body>
    </html>
  );
}
