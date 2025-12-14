import {
    AstroType,
    CurrentType,
    CurrentAtmosphereType,
    HourlyArray,
    HourlyType,
    LocationType, ForecastArray, ForecastType, CityArray, CityType
} from "@/types/weather.types";
import {
    ApiAstro,
    ApiCurrent,
    ApiForecastArray,
    ApiHour,
    ApiHourArray,
    ApiLocation,
    ApiSearchCity, ApiSearchCityArray
} from "@/types/api.types";


export function mapLocation(location: ApiLocation): LocationType {
    return {
        name: location.name,
        region: location.region,
        country: location.country,
        lat: location.lat,
        lon: location.lon,
        localtime: location.localtime,
    }
}

export function mapCurrentAndAtmospheric(current: ApiCurrent): {
    Current: CurrentType,
    Atmospheric: CurrentAtmosphereType
} {
    return {
        Current: {
            condition: current.condition,

            temperature: {
                celsius: {
                    actual: current.temp_c,
                    feelsLike: current.feelslike_c
                },
                fahrenheit: {
                    actual: current.temp_f,
                    feelsLike: current.feelslike_f,
                },
            }
        }
        ,

        Atmospheric: {
            metric: {
                windKph: current.wind_kph,
                visibilityKm: current.vis_km,
                pressureMb: current.pressure_mb,
                dewPointC: current.dewpoint_c,
            },

            imperial: {
                windMph: current.wind_mph,
                visibilityMiles: current.vis_miles,
                pressureIn: current.pressure_in,
                dewPointF: current.dewpoint_f,
            },
            humidity: current.humidity,
            cloud: current.cloud,
            uv: current.uv,
        }
    };
}

export function mapAstro(astro: ApiAstro): AstroType {
    return {
        sunrise: astro.sunrise,
        sunset: astro.sunset,
        moonrise: astro.moonrise,
        moonset: astro.moonset,
        moonphase: astro.moon_phase
    }
}

export function mapHourly(hourly: ApiHourArray): HourlyArray {
    const now = new Date();
    now.setMinutes(0, 0, 0);
    const nearestHour = now.getHours();

    return hourly.flatMap((item: ApiHour): HourlyType[] => {
        const parsed = new Date(item.time.replace(" ", "T"));
        const apiHour = parsed.getHours();


        if (apiHour >= nearestHour) {

            const am_pm = apiHour >= 12 ? "PM" : "AM";
            const hour = apiHour % 12 || 12
            const time = `${hour} ${am_pm}`

            return [{
                time: time,
                temp_c: item.temp_c,
                temp_f: item.temp_f,
                text: item.condition.text,
                icon: item.condition.icon,
            }];
        }

        return [];
    });
}

export function mapForecast(forecast: ApiForecastArray): ForecastArray {
    return forecast.map((item): ForecastType => ({
        date: item.date,
        day: item.day,
        hourly: mapHourly(item.hour),
    }));
}

export function cityMapper(cities: ApiSearchCityArray): CityArray {
    return cities.map((city): CityType => ({
        name: city.name,
        id: city.id,
    }))
}

