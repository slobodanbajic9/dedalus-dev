import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slobodan Bajic",
  description:
    "Full stack web developer who builds for the web with a design-oriented approach. In addition to coding, I use my free time to practice football, go to the gym and hang out with friends.",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Layout>
            <Navbar />
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
