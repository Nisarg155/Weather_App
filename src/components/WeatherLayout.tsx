"use client";

import * as Box from "@radix-ui/react-slot";
import { ReactNode } from "react";
// import { cn } from "@/lib/utils"; // optional helper if using shadcn

interface LayoutProps {
    children: ReactNode;
}

export default function WeatherLayout({ children }: LayoutProps) {
    return (
        <div  className="min-h-screen w-full bg-slate-900 text-slate-100 flex flex-col">
            {/* Top Navigation */}
            <header className="w-full border-b border-slate-800 bg-slate-900/60 backdrop-blur-md py-4 px-6">
        <TopBar />
        </header>

    {/* Main Content */}
    <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
        {children}
        </main>
        </div>
);
}

/* TopBar component */

function TopBar() {
    return (
        <div className="flex items-center gap-4">
            {/* App title */}
            <h1 className="text-xl font-semibold tracking-tight">Weather App</h1>

    {/* Search bar (shadcn/ui input optional) */}
    <input
        placeholder="Search for cities"
    className="ml-auto w-full max-w-md rounded-lg bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        </div>
);
}
