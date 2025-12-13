"use client";

export function AstroCardLoader() {
    return (
        <div className="grid grid-cols-2 mt-4 mb-4 gap-2 animate-pulse">

            <div className="rounded-xl bg-slate-800/60 p-3 grid grid-cols-2 text-center">

                <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-700/50 mb-2" />
                    <div className="h-3 w-14 bg-slate-700/40 rounded" />
                    <div className="h-4 w-10 bg-slate-700/50 rounded mt-1" />
                </div>


                <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-700/50 mb-2" />
                    <div className="h-3 w-14 bg-slate-700/40 rounded" />
                    <div className="h-4 w-10 bg-slate-700/50 rounded mt-1" />
                </div>

            </div>


            <div className="rounded-xl bg-slate-800/60 p-3 grid grid-cols-3 text-center">

                <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-700/50 mb-2" />
                    <div className="h-3 w-14 bg-slate-700/40 rounded" />
                    <div className="h-4 w-10 bg-slate-700/50 rounded mt-1" />
                </div>


                <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-700/50 mb-2" />
                    <div className="h-3 w-14 bg-slate-700/40 rounded" />
                    <div className="h-4 w-10 bg-slate-700/50 rounded mt-1" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-slate-700/50 mb-2" />
                    <div className="h-3 w-14 bg-slate-700/40 rounded" />
                    <div className="h-4 w-10 bg-slate-700/50 rounded mt-1" />
                </div>

            </div>

        </div>
    );
}
