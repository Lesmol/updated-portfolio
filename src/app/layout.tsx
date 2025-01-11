import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lesedi Molemi",
  description:
    "Hi there👋🏾, I'm Lesedi. Welcome to my website where I manipulate the information to show you what I want you to see😈",
  icons: {
    icon: "https://cloudresumeresources.blob.core.windows.net/resumeimages/logo.svg",
  },
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
