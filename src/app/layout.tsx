import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
