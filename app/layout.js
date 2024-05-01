import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "2024 體驗營切版任務一",
  description: "2024 體驗營切版任務一 by Aaron",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
