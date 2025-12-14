"use client";

import React from "react";
import {ForecastArray} from "@/types/weather.types";
import Image from "next/image";
import {Scale} from "@/types/store.types";


export function SevenDayForecast({forecast, scale}: { forecast: ForecastArray; scale: Scale }) {
    return (
        <div className="mt-4">
            <div className="rounded-2xl bg-slate-800/60 p-4">
                <h3 className="text-sm text-slate-300 mb-4">7-DAY FORECAST</h3>

                {/* horizontal scroll on small, grid on medium */}
                <div className="overflow-x-auto">
                    <div className="inline-flex md:flex md:divide-x-0 w-full">
                        {forecast.map((day, idx) => {
                            const weekday = new Date(day.date).toLocaleDateString(undefined, {
                                weekday: "short",
                            });
                            const icon = day.day.condition.icon.startsWith("//")
                                ? `https:${day.day.condition.icon}`
                                : day.day.condition.icon;

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
                                    <Image
                                        src={icon}
                                        alt={day.day.condition.text}
                                        className="h-10 w-10 my-1"
                                        width={10}
                                        height={10}
                                    />

                                    {/* Condition */}
                                    <div className="text-xs text-slate-400 mt-1">
                                        {day.day.condition.text}
                                    </div>

                                    {/* Temps */}
                                    <div className="text-lg font-semibold mt-2">
                                        {scale === 'C' ? Math.round(day.day.maxtemp_c) : Math.round(day.day.maxtemp_f)}°
                                        <span className="text-slate-400 text-sm">
                      /{scale ? Math.round(day.day.mintemp_c) : Math.round(day.day.mintemp_f)}°
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
