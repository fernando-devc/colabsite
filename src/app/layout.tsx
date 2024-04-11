import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "ColabDevs ",
  description: "ColabDevs sistemas e desenvolvimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
