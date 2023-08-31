import Footer from "@/components/footer";
import NavMenu from "@/components/nav-menu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Test Project",
  description: "Some description here !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
