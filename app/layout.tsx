import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const tcSans = Noto_Sans_TC({
  variable: '--font-tc-sans',
  subsets: [ 'latin' ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kyudo Tori',
  description: 'Know the Way. Mark the Time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tcSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
