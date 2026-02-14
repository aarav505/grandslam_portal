import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Grandslam Portal",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}


       
      <footer className="fixed bottom-0 left-0 w-full text-center text-m text-gray-500 py-2 bg-none border-t">
  Built by <span className="text-blue-500"><a href="https://www.aaravanand.me/">Aarav Anand</a></span>
</footer>

        
      </body>
    </html>
  );
}
