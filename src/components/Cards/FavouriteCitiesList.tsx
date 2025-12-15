"use client";

import { useStore } from "@/lib/useStore";

export function FavouriteCitiesList() {
    const favourites = useStore((s) => s.favourites);
    const removeFavourite = useStore((s) => s.removeFavourite);
    const setCurrentLocation = useStore((s) => s.setCurrentLocation);

    if (favourites.length === 0) {
        return (
            <div className="mt-6 rounded-xl bg-slate-800/60 p-4 text-center text-slate-400">
                No favourite cities yet ⭐
            </div>
        );
    }

    return (
        <div className="mt-6 rounded-xl bg-slate-800/60 p-4">
            <h3 className="text-sm text-slate-300 mb-3">Favourite Cities</h3>

            <div className="divide-y divide-slate-700">
                {favourites.map((city) => (
                    <div
                        key={city}
                        onClick={() => setCurrentLocation(city)}
                        className="flex items-center justify-between py-3"
                    >

                        <button

                            className="text-slate-200 font-medium hover:text-sky-400 transition"
                        >
                            {city.charAt(0).toUpperCase() + city.slice(1)}
                        </button>

                        <button
                            onClick={() => removeFavourite(city)}
                            className="text-red-400 hover:text-red-300 text-sm transition"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
