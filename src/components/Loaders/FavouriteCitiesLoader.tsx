"use client";

export function FavouriteCitiesLoader() {
    return (
        <div className="mt-6 rounded-xl bg-slate-800/60 p-4">
            {/* Title skeleton */}
            <div className="h-4 w-32 bg-slate-700/50 rounded mb-4 animate-pulse" />

            {/* Skeleton Rows */}
            <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between"
                    >
                        <div className="h-4 w-24 bg-slate-700/40 rounded animate-pulse" />
                        <div className="h-4 w-12 bg-red-400/30 rounded animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    );
}
