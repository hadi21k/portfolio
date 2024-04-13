import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadi Diab | Full Stack Developer",
  description:
    "Full-stack developer with expertise in JavaScript, TypeScript, React, and Node.js. I thrive in collaboration, ensuring clear communication and strong problem-solving skills. Seeking an opportunity to leverage my technical proficiency to empower a forward-thinking organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[200px]`}>
        <NextTopLoader color="#f37a0c" showSpinner={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
