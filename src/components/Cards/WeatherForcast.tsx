"use client";

import React from "react";

type ForecastDay = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: { text: string; icon: string };
    };
};

export function SevenDayForecast({ days }: { days: ForecastDay[] }) {
    return (
        <div className="mt-4">
            <div className="rounded-2xl bg-slate-800/60 p-4">
                <h3 className="text-sm text-slate-300 mb-4">7-DAY FORECAST</h3>

                {/* horizontal scroll on small, grid on medium */}
                <div className="overflow-x-auto">
                    <div className="inline-flex md:flex md:divide-x-0 w-full">
                        {days.map((d, idx) => {
                            const weekday = new Date(d.date).toLocaleDateString(undefined, {
                                weekday: "short",
                            });
                            const icon = d.day.condition.icon.startsWith("//")
                                ? `https:${d.day.condition.icon}`
                                : d.day.condition.icon;

                            return (
                                <div
                                    key={idx}
                                    className={`
                    flex-shrink-0 w-28 md:w-auto md:flex-1
                    ${idx !== 0 ? "border-l border-slate-700" : ""}
                    px-6 py-6 flex flex-col items-center justify-center text-center
                  `}
                                >
                                    {/* Day */}
                                    <div className="text-xs text-slate-400 mb-2">{weekday}</div>

                                    {/* Icon */}
                                    <img
                                        src={icon}
                                        alt={d.day.condition.text}
                                        className="h-10 w-10 my-1"
                                        width={40}
                                        height={40}
                                    />

                                    {/* Condition */}
                                    <div className="text-xs text-slate-400 mt-1">
                                        {d.day.condition.text}
                                    </div>

                                    {/* Temps */}
                                    <div className="text-lg font-semibold mt-2">
                                        {Math.round(d.day.maxtemp_c)}°
                                        <span className="text-slate-400 text-sm">
                      /{Math.round(d.day.mintemp_c)}°
                    </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
