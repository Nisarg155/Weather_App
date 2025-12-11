import {Current} from "@/types/component.types";


export function AirConditions({ current }: { current: Current }) {
    return (
        <div className="rounded-2xl bg-slate-800/60 p-4">
            <h4 className="text-sm text-slate-300 mb-3">Air Conditions</h4>


            <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded bg-slate-800/40">
                    <div className="text-xs text-slate-400">Humidity</div>
                    <div className="text-xl font-semibold mt-1">{current.humidity}%</div>
                </div>


                <div className="p-3 rounded bg-slate-800/40">
                    <div className="text-xs text-slate-400">Wind</div>
                    <div className="text-xl font-semibold mt-1">{current.wind_kph} km/h</div>
                </div>


                <div className="p-3 rounded bg-slate-800/40">
                    <div className="text-xs text-slate-400">Pressure</div>
                    <div className="text-xl font-semibold mt-1">{current.pressure_mb} mb</div>
                </div>


                <div className="p-3 rounded bg-slate-800/40">
                    <div className="text-xs text-slate-400">UV</div>
                    <div className="text-xl font-semibold mt-1">—</div>
                </div>
            </div>
        </div>
    );
}