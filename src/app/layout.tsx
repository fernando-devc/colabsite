import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en" className="overflow-hidden">
      <body className="overflow-hidden" >{children}</body>
    </html>
  );
}
