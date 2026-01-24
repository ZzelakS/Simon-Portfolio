import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/shared/Navbar";
import BackToTop from "./components/shared/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simon — Product & Growth",
  description:
    "Building digital experiences, AI workflows, and growth systems for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-gray-900 text-white`}
      >
        <Navbar />
        <div className="pt-16">{children}</div>
        <BackToTop/>
      </body>
    </html>
  );
}
