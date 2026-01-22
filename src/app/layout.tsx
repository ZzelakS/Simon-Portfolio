import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/shared/Navbar"; // <-- add this

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simon — Product & Growth",
  description: "Building digital experiences, AI workflows, and growth systems for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />

        {/* this prevents content from hiding behind the navbar */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
