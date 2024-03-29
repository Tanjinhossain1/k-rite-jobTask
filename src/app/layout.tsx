import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveDrawer from "./component/MenuDrower/Drower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveDrawer>
          {children}
          </ResponsiveDrawer>
        </body>
    </html>
  );
}
