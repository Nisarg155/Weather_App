import {Current, Hourly} from "@/types/component.types";
import {HourlyCarousel} from "@/components/HourlyCard";

const mockHourly: Hourly[] = [
    { time: "6 AM", temp_c: 25, icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    { time: "9 AM", temp_c: 28, icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    { time: "12 PM", temp_c: 33, icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { time: "3 PM", temp_c: 34, icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { time: "6 PM", temp_c: 32, icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { time: "9 PM", temp_c: 30, icon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    { time: "6 AM", temp_c: 25, icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    { time: "9 AM", temp_c: 28, icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" },
    { time: "12 PM", temp_c: 33, icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { time: "3 PM", temp_c: 34, icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { time: "6 PM", temp_c: 32, icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" },
    { time: "9 PM", temp_c: 30, icon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
];

export function WeatherCard({ location, current }: { location: string; current: Current }) {
    return (
        <div className="rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/60 p-6 shadow-lg">
            <div className="flex items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold">{location}</h2>
                    <p className="text-sm text-slate-400">{current.condition.text}</p>


                    <div className="mt-4 flex items-end gap-6">
                        <div className="text-6xl font-extrabold">{Math.round(current.temp_c)}°</div>
                        <div className="text-sm text-slate-400">Feels like {Math.round(current.feelslike_c ?? current.temp_c)}°</div>
                    </div>
                </div>


                <div className="flex flex-col items-center">
                    <div className="h-28 w-28 rounded-full bg-gradient-to-b from-yellow-400 to-amber-400 flex items-center justify-center shadow-inner">
                        {/* icon (use absolute CDN path from API response) */}
                        <img
                            src={current.condition.icon?.startsWith("//") ? `https:${current.condition.icon}` : current.condition.icon}
                            alt={current.condition.text}
                            className="h-16 w-16"
                        />
                    </div>


                    <div className="mt-3 text-sm text-slate-300">{new Date().toLocaleTimeString()}</div>
                </div>
            </div>


            {/* Hourly strip placeholder */}
            <div className="mt-6">
                <HourlyCarousel hourly={mockHourly} />
            </div>
        </div>
    );
}