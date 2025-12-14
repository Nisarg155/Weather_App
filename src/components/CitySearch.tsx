"use client";

import {Combobox, ComboboxInput, ComboboxOption, ComboboxOptions} from "@headlessui/react";
import {useEffect, useState} from "react";
import {useStore} from "@/lib/useStore";
import {CityArray, CityType} from "@/types/weather.types";
import {searchCity} from "@/Services/WeatherAPI";


export function CitySearch() {
    const {setCurrentLocation} = useStore();
    const [cities, setCities] = useState<CityArray | []>([])
    const [selected, setSelected] = useState<CityType | null>(null);
    const [query, setQuery] = useState("");


    useEffect(() => {
        async function load() {
            const response = await searchCity(query)

            if (response) {
                const data = response.filter((c) =>
                    c.name.toLowerCase().includes(query.toLowerCase()))

                setCities(data)
            }
            else{
                setCities([])
            }
        }
        if (query === "") return;
        load()
    }, [query]);

    return (
        <Combobox
            value={selected}
            onChange={(city) => {
                setQuery("");
                setSelected(city);
                if (city === null) return;
                setCurrentLocation(city.name.toLowerCase());

            }}
        >
            {/* Wrapper so options width = input width */}
            <div className="relative w-full max-w-md">

                {/* INPUT BOX */}
                <ComboboxInput
                    placeholder="Search for cities..."
                    className="
        w-full rounded-lg bg-slate-800 px-4 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-sky-500
      "

                    displayValue={()=> ""}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {/* OPTIONS BOX */}
                <ComboboxOptions
                    className="
        absolute top-full left-0 mt-1 w-full
        rounded-lg bg-slate-800 shadow-xl border border-slate-700
        z-50 max-h-60 overflow-y-auto
        empty:hidden
      "
                >
                    {cities.length === 0 ? (
                        <div className="p-3 text-sm text-slate-400">No results found.</div>
                    ) : (
                        cities.map((city) => (
                            <ComboboxOption
                                key={city.id}
                                value={city}
                                className="cursor-pointer px-4 py-2 text-sm hover:bg-slate-700 data-[focus]:bg-slate-700"
                            >
                                {city.name}
                            </ComboboxOption>
                        ))
                    )}
                </ComboboxOptions>

            </div>
        </Combobox>

    );
}
