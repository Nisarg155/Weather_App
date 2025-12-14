import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {Unit,Coordinates,Scale,WeatherState} from "@/types/store.types";

export const useStore = create<WeatherState>()(
    devtools(
        persist(
            (set) => (
                {
                    currentLocation: "vadodara",
                    unit: "metric",
                    scale: "C",
                    favourites: [],
                    coords: null,

                    setCurrentLocation: (location: string) => set({currentLocation: location}),
                    setUnit: (unit: Unit) => set({unit: unit}),
                    setScale: (scale: Scale) => set({scale: scale}),

                    addFavourite: (city: string) =>
                        set((s) => ({
                            favourites: Array.from(new Set([...s.favourites, city])),
                        })),

                    removeFavourite: (city: string) =>
                        set((s) => ({
                            favourites: s.favourites.filter((c) => c !== city),
                        })),
                    setCoords: (c: Coordinates) => set({coords: c}),
                    clearFavourite: () => set({favourites: []}),
                }
            ),
            {
                name: "weather-storage",
            }
        ),
        {name: 'WeatherStore'}
    )
)