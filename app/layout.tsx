import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, Theme } from "@radix-ui/themes";
import NavbarSection from "./navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Freelance Recruitment Specialist",
    template: "%s | Freelance Recruitment Specialist",
  },
  description: "Freelance Recruitment Specialist",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Theme>
          {/* Full width navbar */}
          <NavbarSection />
          <Box className="w-full max-w-360 mx-auto px-6 pt-22">
            {children}
          </Box>

        </Theme>
      </body>
    </html>
  );
}