import "./globals.css";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAT-Q Engineering (Pty) Ltd",
  description: "Professional structural, mechanical, fabrication and installation engineering services across South Africa.",
  metadataBase: new URL("https://mat-qengineering.co.za"),
  openGraph: {
    title: "MAT-Q Engineering (Pty) Ltd",
    description: "Professional engineering solutions across South Africa.",
    url: "https://mat-qengineering.co.za",
    siteName: "MAT-Q Engineering",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}