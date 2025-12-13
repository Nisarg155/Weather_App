// components/WeatherCardLoader.tsx
"use client";
import React from "react";

export default function WeatherCardLoader() {
    return (
        <div
            role="status"
            aria-label="Loading weather"
            className="rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/60 p-6 shadow-lg"
        >
            <div className="flex items-center justify-between gap-6">
                {/* Left column */}
                <div className="flex-1">
                    {/* Title skeleton */}
                    <div className="h-8 w-40 rounded-md bg-slate-700/60 animate-pulse" />

                    {/* Condition text skeleton */}
                    <div className="mt-2 h-4 w-28 rounded bg-slate-700/50 animate-pulse" />

                    {/* Temp block */}
                    <div className="mt-4 flex items-end gap-6">
                        {/* Big temperature skeleton */}
                        <div className="h-20 w-28 rounded-md bg-slate-700/60 animate-pulse" />

                        {/* Feels like skeleton */}
                        {/*<div className="text-sm text-slate-400">*/}
                        {/*    <div className="h-4 w-36 rounded bg-slate-700/50 animate-pulse" />*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col items-center">
                    {/* Icon circle */}
                    <div className="h-28 w-28 rounded-full  flex items-center justify-center shadow-inner">
                        {/* circular shimmer (simulates icon) */}
                        <div className="h-16 w-16 rounded-full bg-white/20 animate-pulse" />
                    </div>

                    {/* Time skeleton */}
                    <div className="mt-3 h-4 w-20 rounded bg-slate-700/50 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
