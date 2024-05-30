import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wilfred Chen Portfolio",
    description: "Wilfred Chen's Personal Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script src="https://kit.fontawesome.com/4b86cbc595.js" crossorigin="anonymous"></script>
            </head>
            <body className={openSans.className}>{children}</body>
        </html>
    );
}
