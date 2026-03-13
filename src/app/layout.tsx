import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yu-Chien (Jason) Chen | Software Engineer",
  description:
    "Portfolio of Yu-Chien (Jason) Chen - Software Engineer focused on backend, cloud, and enterprise systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}