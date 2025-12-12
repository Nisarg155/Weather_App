import toast from "react-hot-toast";
import {CurrentDataType} from "@/types/weather.types";
import {mapAstro, mapCurrent, mapHourly, mapLocation} from "@/utils/mapper.functions";


export async function fetchCurrent(city: string): Promise<CurrentDataType| undefined> {
    try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/forecast.json?key=${apiKey}&q=${city}&days=1`;

        if (!apiKey) {
            throw new Error("No API key found.");
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch weather");
        }

        const {location, current, forecast} = await response.json();
        return {
            location: mapLocation(location),
            current: mapCurrent(current),
            astro: mapAstro(forecast.forecastday[0].astro),
            hourly: mapHourly(forecast.forecastday[0].hour)
        }

    } catch (e) {
        // console.error(e.message);
        toast.error(e instanceof Error ? e.message : "Failed to fetch current data");


    }
}
