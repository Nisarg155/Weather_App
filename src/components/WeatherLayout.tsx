"use client";

import * as Box from "@radix-ui/react-slot";
import {ReactNode} from "react";
import {CitySearch} from "@/components/CitySearch";

// import { cn } from "@/lib/utils"; // optional helper if using shadcn

interface LayoutProps {
    children: ReactNode;
}

export default function WeatherLayout({children}: LayoutProps) {
    return (
        <div className="min-h-screen w-full bg-slate-900 text-slate-100 flex flex-col">
            {/* Top Navigation */}
            <header className="w-full border-b border-slate-800 bg-slate-900/60 backdrop-blur-md py-4 px-6">
                <TopBar/>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
                {children}
            </main>
        </div>
    );
}



function TopBar() {
    return (
        <div className="flex items-center gap-4">

            <h1 className="text-xl font-semibold tracking-tight">Weather App</h1>

            <div className="ml-auto w-full max-w-md">
                <CitySearch />
            </div>
        </div>
    );
}
