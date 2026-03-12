import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markus Stuefer | Full-Stack Developer & Tech Founder",
  description: "Portfolio of Markus Stuefer - Full-Stack Developer, Tech Founder, and Trading Algorithm Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
