import { Inter } from "next/font/google";
import "./globals.css";

// Configure Inter with desired subsets and CSS variable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "JAFCO Group of Companies Limited",
  description: "JAFCO Group of Companies Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
