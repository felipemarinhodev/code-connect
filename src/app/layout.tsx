import type { Metadata } from "next";

import './globals.css';
import { Aside } from "@/components/Aside";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="app-container">
        <Aside />
        {children}
        </div>
      </body>
    </html>
  );
}
