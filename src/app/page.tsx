'use client'
import {useStore} from "@/lib/useStore";
import {useEffect, useState} from "react";
import {fetchCurrent} from "@/Services/WeatherAPI";
import WeatherLayout from "@/components/WeatherLayout";
import {WeatherCard} from "@/components/Cards/WeatherCard";
import {Current, ForecastDay} from "@/types/component.types";
import {SevenDayForecast} from "@/components/Cards/WeatherForcast";
import {AirConditions} from "@/components/Cards/AirCondition";
import {CurrentDataType} from "@/types/weather.types";
import WeatherCardLoader from "@/components/Loaders/WeatherCardLoader";
import HourlyCarouselLoader from "@/components/Loaders/HourlyCarouselLoader";
import {HourlyCarousel} from "@/components/Cards/HourlyCard";
import toast from "react-hot-toast";
import {AirConditionsLoader} from "@/components/Loaders/AirConditionsLoader";
import {AstroCard} from "@/components/Cards/AstroCard";
import {AstroCardLoader} from "@/components/Loaders/AstroLoader";
import {RdxSwitch} from "@/components/ui/switch";


export default function Home() {
    const globalLocation = useStore((s) => s.currentLocation);
    const setCurrentLocation = useStore((s) => s.setCurrentLocation);
    const [location, setLocation] = useState(globalLocation);
    const scale = useStore((s) => s.scale);
    const setScale = useStore((s) => s.setScale);
    const unit = useStore((s) => s.unit);
    const setUnit = useStore((s) => s.setUnit);

    console.log(unit)

    // Card States
    const [weatherCardData, setWeatherCardData] = useState<
        Pick<CurrentDataType, "location" | "current"> | null
    >(null);

    const [hourlyCarousalData, setHourlyCarousalData] = useState<Pick<CurrentDataType, "hourly"> | null>(null)
    const [airConditionsData, setAirConditionsData] = useState<Pick<CurrentDataType,"atmospheric"> | null> (null)
    const [astroData, setAstroData] = useState<Pick<CurrentDataType,"astro"> | null >(null)

    // Loaders State

    const [loader, setLoader] = useState(true)

    useEffect(() => {

        try {
            const load = async () => {
                const data = await fetchCurrent(location)

                setWeatherCardData({
                    location: data!.location,
                    current: data!.current
                });

                setHourlyCarousalData({
                    hourly: data!.hourly,
                })

                setAirConditionsData({
                    atmospheric: data!.atmospheric
                })

                setAstroData({
                    astro:data!.astro,
                })
                setLoader(false)

            }
            load();
        } catch (e) {
            toast.error(e instanceof Error ? e.message : "Failed to fetch current data");
        }

    }, [location]);



    const mockForecast: ForecastDay[] = Array.from({length: 7}).map((_, i) => ({
        date: new Date(Date.now() + i * 86400000).toISOString(),
        day: {
            maxtemp_c: 36 - i,
            mintemp_c: 22 - i,
            condition: {text: i % 2 ? "Sunny" : "Cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"}
        },
    }));


    return (
        <>
            <WeatherLayout>
                <div className="flex justify-end gap-6 mb-4 pr-2">

                    <RdxSwitch
                        label="°F"
                        checked={scale === "F"}
                        onChange={(v) => {
                            setScale(v ? "F" : "C");
                        }}
                    />

                    <RdxSwitch
                        label="Imperial"
                        checked={unit === 'imperial'}
                        onChange={(v) => setUnit(v ? "imperial" : "metric")}
                    />

                </div>
                {
                    loader ? (<>
                            <WeatherCardLoader/>
                            <HourlyCarouselLoader/>
                            <AirConditionsLoader/>
                            <AstroCardLoader/>
                        </>)
                        : (
                            <>
                                <WeatherCard location={weatherCardData!.location} current={weatherCardData!.current} scale={scale}
                                />
                                <HourlyCarousel hourly={hourlyCarousalData!.hourly} scale={scale}/>
                                <AirConditions aircondition={airConditionsData!.atmospheric} unit={unit}/>
                                <AstroCard astro={astroData!.astro}/>
                            </>
                        )
                }

                <SevenDayForecast days={mockForecast}/>
            </WeatherLayout>
        </>
    );
}
