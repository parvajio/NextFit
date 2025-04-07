import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Bebas_Neue, Orbitron, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400"
})

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
})

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"]
})

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "NextFit – Your Next-Level Fitness Hub",
  description: "Discover premium gym gear and fitness essentials at NextFit. Power up your workouts with top-tier equipment built for performance and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${bebasNeue.variable} ${orbitron.variable} ${oswald.variable} antialiased max-w-7xl mx-auto`}
      >
        <div>
          <Header></Header>
        </div>
        {children}
      </body>
    </html>
  );
}
