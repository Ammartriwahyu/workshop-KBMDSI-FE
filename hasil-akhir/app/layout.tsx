import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// Lato bukan "variable font", jadi weight harus disebutkan satu per satu
const lato = Lato({
  variable: "--font-lato", // dipakai di globals.css
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "freeCodeCamp Clone",
  description: "Latihan slicing halaman utama freeCodeCamp dengan Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-fcc-bg text-fcc-text">
        {children}
      </body>
    </html>
  );
}
