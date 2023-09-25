import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-zinc-800 p-4">
          <Link href="/">
            <h2 className="text-slate-100	font-bold">BZB</h2>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
