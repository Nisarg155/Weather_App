import {CurrentAtmosphereType} from "@/types/weather.types";
import {Unit} from "@/types/store.types";

export function AirConditions({aircondition,unit}: { aircondition: CurrentAtmosphereType; unit:Unit }) {
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
                    <div className="text-xl font-semibold mt-1">{aircondition.humidity + ' %'}</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Wind</div>
                    <div className="text-xl font-semibold mt-1">{unit === 'metric' ? aircondition.metric.windKph + ' Kph' : aircondition.imperial.windMph + ' Mph' }</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Dew point</div>
                    <div className="text-xl font-semibold mt-1">{unit === 'metric' ?  aircondition.metric.dewPointC + ' °C' : aircondition.imperial.dewPointF + ' °F'}</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Pressure</div>
                    <div className="text-xl font-semibold mt-1">{unit === 'metric' ? aircondition.metric.pressureMb + ' Mb' : aircondition.imperial.pressureIn  + ' In' }</div>
                </div>
                <div className="p-3 rounded-xl shadow-xl/20 bg-slate-800/40">
                    <div className="text-xs text-slate-400">Visibility</div>
                    <div className="text-xl font-semibold mt-1">{unit === 'metric' ? aircondition.metric.visibilityKm + ' Km' : aircondition.imperial.visibilityMiles + ' Mi' }</div>
                </div>

            </div>
        </div>
    );
}