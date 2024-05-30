import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
            <body className={openSans.className}>{children}</body>
        </html>
    );
}
