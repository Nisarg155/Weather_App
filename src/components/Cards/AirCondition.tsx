import {CurrentAtmosphereType} from "@/types/weather.types";

export function AirConditions({aircondition}: { aircondition: CurrentAtmosphereType }) {
    return (
        <div className="rounded-2xl bg-slate-800/60 p-4">
            <h4 className="text-sm text-slate-300 mb-3">Air Conditions</h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">


                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">UV</div>
                    <div className="text-xl font-semibold mt-1">{aircondition.uv}</div>
                </div>

                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Humidity</div>
                    <div className="text-xl font-semibold mt-1">{aircondition.humidity}</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Wind</div>
                    <div className="text-xl font-semibold mt-1">{aircondition.metric.windKph}</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Dew point</div>
                    <div className="text-xl font-semibold mt-1">{aircondition.metric.dewPointC}</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Pressure</div>
                    <div className="text-xl font-semibold mt-1">{aircondition.metric.pressureMb}</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Visibility</div>
                    <div className="text-xl font-semibold mt-1">{aircondition.metric.visibilityKm}</div>
                </div>

            </div>
        </div>
    );
}