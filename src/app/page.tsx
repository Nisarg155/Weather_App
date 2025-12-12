'use client'
import {useStore} from "@/lib/useStore";
import {useEffect, useState} from "react";
import {fetchCurrent} from "@/Services/WeatherAPI";
import WeatherLayout from "@/components/WeatherLayout";
import {WeatherCard} from "@/components/WeatherCard";
import {Current, ForecastDay} from "@/types/component.types";
import {SevenDayForecast} from "@/components/WeatherForcast";
import {AirConditions} from "@/components/AirCondition";


export default function Home() {
    const globalLocation = useStore((s) => s.currentLocation);
    const setCurrentLocation = useStore((s) => s.setCurrentLocation);
    const [location, setLocation] = useState(globalLocation);

    useEffect(() => {
        const load = async () => {
            const data = await fetchCurrent(location)
            console.log(data);
        }
        load();
    }, [location]);

    const mockCurrent: Current = {
        temp_c: 22.6,
        feelslike_c: 23.2,
        humidity: 27,
        wind_kph: 9.7,
        pressure_mb: 1015,
        condition: { text: "Clear", icon: "//cdn.weatherapi.com/weather/64x64/night/113.png" },
    };

    const mockForecast: ForecastDay[] = Array.from({ length: 7 }).map((_, i) => ({
        date: new Date(Date.now() + i * 86400000).toISOString(),
        day: { maxtemp_c: 36 - i, mintemp_c: 22 - i, condition: { text: i % 2 ? "Sunny" : "Cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" } },
    }));

    return (
        <>
            <WeatherLayout>
                <WeatherCard location={globalLocation} current={mockCurrent}/>
                <AirConditions current={mockCurrent}/>
                <SevenDayForecast days={mockForecast}/>
            </WeatherLayout>
        </>
    );
}
