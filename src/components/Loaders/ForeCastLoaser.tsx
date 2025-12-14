"use client";

export function SevenDayForecastLoader() {
    return (
        <div className="mt-4">
            <div className="rounded-2xl bg-slate-800/60 p-4 animate-pulse">
                <div className="h-4 w-32 bg-slate-700/40 rounded mb-4" />

                <div className="overflow-x-auto">
                    <div className="inline-flex md:flex w-full">

                        {Array.from({ length: 7 }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`
                  flex-shrink-0 w-28 md:w-auto md:flex-1
                  ${idx !== 0 ? "border-l border-slate-700/50" : ""}
                  px-6 py-6 flex flex-col items-center justify-center text-center
                `}
                            >
                                {/* Day Name Skeleton */}
                                <div className="h-3 w-12 bg-slate-700/40 rounded mb-3" />

                                {/* Icon Skeleton */}
                                <div className="h-10 w-10 rounded-full bg-slate-700/50 mb-3" />

                                {/* Condition text skeleton */}
                                <div className="h-3 w-16 bg-slate-700/40 rounded mb-3" />

                                {/* Temperature skeleton */}
                                <div className="h-5 w-20 bg-slate-700/40 rounded" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
