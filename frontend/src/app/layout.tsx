import type {Metadata} from "next";
import "./globals.css";
import {AuthProvider} from "@/context/authContext";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "Tsundoku",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <AuthProvider>
                <TooltipProvider>
                    {children}
                </TooltipProvider>
        </AuthProvider>
        <Toaster/>
        </body>
        </html>
    );
}
