import toast from "react-hot-toast";
import {CityArray, WeatherDataType} from "@/types/weather.types";
import {
    cityMapper,
    mapAstro,
    mapCurrentAndAtmospheric,
    mapForecast,
    mapHourly,
    mapLocation
} from "@/utils/mapper.functions";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export async function fetchCurrent(city: string): Promise<WeatherDataType | undefined> {
    try {

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/forecast.json?key=${apiKey}&q=${city}&days=8`;

        if (!apiKey) {
            throw new Error("No API key found.");
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch weather");
        }

        const {location, current, forecast} = await response.json();
        const {Current, Atmospheric} = mapCurrentAndAtmospheric(current);

        const next7daysforecast = forecast.forecastday.slice(1)

        return {
            location: mapLocation(location),
            current: Current,
            atmospheric: Atmospheric,
            astro: mapAstro(forecast.forecastday[0].astro),
            hourly: mapHourly(forecast.forecastday[0].hour),
            forecast: mapForecast(next7daysforecast)
        }

    } catch (e) {
        // console.error(e.message);
        toast.error(e instanceof Error ? e.message : "Failed to fetch current data");
    }
}


export async function searchCity(city: string): Promise<CityArray | [] | undefined> {
    try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/search.json?key=${apiKey}&q=${city}`;


        if (!apiKey) {
            throw new Error("No API key found.");
        }

        const response = await fetch(url);
        const cities = await response.json();

        if (!response.ok) {
            throw new Error("Error Finding the City ");
        }

        return cityMapper(cities)

    } catch (e) {
        toast.error(e instanceof Error ? e.message : "Error Finding the City");
    }
}