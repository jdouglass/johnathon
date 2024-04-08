import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnathon Douglass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`mx-auto my-12 max-w-[692px] px-6 text-gray-1200 antialiased sm:my-32 md:my-16 ${inter.className}`}
      >
        <ThemeProvider
          enableSystem={true}
          enableColorScheme={true}
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
