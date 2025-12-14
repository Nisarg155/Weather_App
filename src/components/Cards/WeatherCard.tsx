import {CurrentType,  LocationType} from "@/types/weather.types";
import Image from "next/image";
import {Scale} from "@/types/store.types";



export function WeatherCard({ location, current,scale }: { location: LocationType; current: CurrentType; scale:Scale }) {


    return (
        <div className="rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/60 p-6 shadow-lg">
            <div className="flex items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold">{location.name}</h2>
                    <p className="text-sm text-slate-400">{current.condition.text}</p>


                    <div className="mt-4 flex items-end gap-6">
                        <div className="text-6xl font-extrabold">{  scale === 'C' ? Math.round(current.temperature.celsius.actual) :
                            Math.round(current.temperature.fahrenheit.actual)
                        }°</div>
                        <div className="text-sm text-slate-400">Feels like {scale === 'C' ? (Math.round(current.temperature.celsius.feelsLike ?? current.temperature.celsius.actual) )
                        : (Math.round(current.temperature.fahrenheit.feelsLike ?? current.temperature.fahrenheit.actual) )
                        }°</div>
                    </div>
                </div>


                <div className="flex flex-col items-center">
                    <div className="h-28 w-28 rounded-full  flex items-center justify-center shadow-inner">
                        {/* icon (use absolute CDN path from API response) */}
                        <Image
                            src={current.condition.icon?.startsWith("//") ? `https:${current.condition.icon}` : current.condition.icon}
                            alt={current.condition.text}
                            width={'100'}
                            height={'100'}
                        />
                    </div>


                    <div className="mt-3 text-md font-medium ">{new Date().toLocaleTimeString()}</div>
                </div>
            </div>

        </div>
    );
}