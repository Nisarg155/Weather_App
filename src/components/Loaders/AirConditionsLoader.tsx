"use client";

export function AirConditionsLoader() {
    return (
        <div
            className="
        rounded-2xl bg-slate-800/60 p-4
        animate-pulse
      "
        >
            <div className="h-4 w-28 rounded bg-slate-700/40 mb-4" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-800/40 shadow-xl/20 flex flex-col gap-2"
                    >
                        {/* Title skeleton */}
                        <div className="h-3 w-16 rounded bg-slate-700/40" />

                        {/* Value skeleton */}
                        <div className="h-5 w-12 rounded bg-slate-700/50" />
                    </div>
                ))}
            </div>
        </div>
    );
}
