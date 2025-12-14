
export function MapLoader() {
    return (
        <div
            className="w-full h-64 mt-4 rounded-xl overflow-hidden border border-slate-700
                       bg-slate-800/40 animate-pulse flex items-center justify-center"
        >
            <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full border-4 border-slate-600 border-t-slate-300 animate-spin"/>
                <p className="text-xs text-slate-400 mt-3">Loading map...</p>
            </div>
        </div>
    );
}
