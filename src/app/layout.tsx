import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASR Arena | Blind Speech-to-Text Comparison",
  description:
    "Compare speech-to-text providers in blind tests. Record or upload audio, vote for the best transcription, and see how providers stack up on the leaderboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pt-[88px]">{children}</main>
      </body>
    </html>
  );
}
