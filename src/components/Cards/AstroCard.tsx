import Image from "next/image";
import {AstroType} from "@/types/weather.types";
import { Moon ,Hemisphere } from "lunarphase-js";

export function AstroCard({astro}:{astro:AstroType}) {

    const moonPhaseEmojiMap: Record<string, string> = {
        "New Moon": "🌑",
        "Waxing Crescent": "🌒",
        "First Quarter": "🌓",
        "Waxing Gibbous": "🌔",
        "Full Moon": "🌕",
        "Waning Gibbous": "🌖",
        "Last Quarter": "🌗",
        "Waning Crescent": "🌘",
    };

    const emoji = moonPhaseEmojiMap[astro.moonphase] || "🌙";

    return (
        <div className="grid grid-cols-2 mt-4 mb-4 gap-1 sm:gap-2">

            <div className="rounded-xl bg-slate-800/60 p-3 grid grid-cols-2 text-center">

                <div className="flex flex-col items-center">
                    <Image
                        src="/icons/sun_rise.png"
                        alt="sunrise"
                        width={10}
                        height={10}
                        className="h-10 w-10 mb-2"
                    />
                    <div className="text-xs text-slate-400">Sunrise</div>
                    <div className="text-sm font-medium mt-1">{astro.sunrise}</div>
                </div>

                {/* Sunset */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/icons/sun_set.png"
                        alt="sunset"
                        className="h-10 w-10 mb-2"
                        width={10}
                        height={10}
                    />
                    <div className="text-xs text-slate-400">Sunset</div>
                    <div className="text-sm font-medium mt-1">{astro.sunset}</div>
                </div>

            </div>

            {/* RIGHT — 3 columns: Moonrise / Phase / Moonset */}
            <div className="rounded-xl bg-slate-800/60 p-3 grid grid-cols-3 text-center">

                {/* Moonrise */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/icons/moon_rise.png"
                        alt="moonrise"
                        width={10}
                        height={10}
                        className="h-10 w-10 mb-2"
                    />
                    <div className="text-xs text-slate-400">Moonrise</div>
                    <div className="text-sm font-medium mt-1">{astro.moonrise}</div>
                </div>

                {/* Moon Phase */}
                <div className="flex flex-col items-center">

                    <div className="text-3xl mb-3">{emoji}</div>
                    <div className="text-xs text-slate-400">Phase</div>
                    <div className="text-sm font-medium ">{astro.moonphase}</div>
                </div>

                {/* Moonset */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/icons/moon_set.png"
                        alt="moonset"
                        width={10}
                        height={10}
                        className="h-10 w-10 mb-2"
                    />
                    <div className="text-xs text-slate-400">Moonset</div>
                    <div className="text-sm font-medium mt-1">{astro.moonset}</div>
                </div>

            </div>

        </div>
    );
}
