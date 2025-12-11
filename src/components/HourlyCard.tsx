import {Hourly} from "@/types/component.types";

export function HourlyCarousel({ hourly }: { hourly: Hourly[] }) {
    return (
        <div className="mt-3 overflow-x-auto">
            <div className="flex gap-4">
                {hourly.map((h, idx) => (
                    <div
                        key={idx}
                        className="min-w-[84px] rounded-lg bg-slate-800/50 px-3 py-3 text-center"
                    >
                        <div className="text-xs text-slate-400">{h.time}</div>
                        <img src={h.icon} alt="icon" className="mx-auto my-1 h-8 w-8" />
                        <div className="text-sm font-medium">{Math.round(h.temp_c)}°</div>
                    </div>
                ))}
            </div>
        </div>
    );
}