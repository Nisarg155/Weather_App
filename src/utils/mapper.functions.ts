import {AstroType, CurrentType, HourlyArray, HourlyType, LocationType} from "@/types/weather.types";
import {ApiAstro, ApiCurrent, ApiHour, ApiHourArray, ApiLocation} from "@/types/api.types";


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

export function mapCurrent(current: ApiCurrent): CurrentType {
    return {
        lastUpdatedEpoch: current.last_updated_epoch,
        lastUpdated: current.last_updated,
        isDay: current.is_day,

        condition: current.condition,

        temperature: {
            celsius: {
                actual: current.temp_c,
                feelsLike: current.feelslike_c,
                windChill: current.windchill_c,
                heatIndex: current.heatindex_c,
            },
            fahrenheit: {
                actual: current.temp_f,
                feelsLike: current.feelslike_f,
                windChill: current.windchill_f,
                heatIndex: current.heatindex_f,
            },
        },

        metric: {
            windKph: current.wind_kph,
            gustKph: current.gust_kph,
            visibilityKm: current.vis_km,
            precipitationMm: current.precip_mm,
            pressureMb: current.pressure_mb,
            dewPointC: current.dewpoint_c,
        },

        imperial: {
            windMph: current.wind_mph,
            gustMph: current.gust_mph,
            visibilityMiles: current.vis_miles,
            precipitationIn: current.precip_in,
            pressureIn: current.pressure_in,
            dewPointF: current.dewpoint_f,
        },

        wind: {
            direction: current.wind_dir,
        },

        humidity: current.humidity,
        cloud: current.cloud,
        uv: current.uv,

        solar: {
            shortRad: current.short_rad ?? 0,
            diffRad: current.diff_rad ?? 0,
            dni: current.dni ?? 0,
            gti: current.gti ?? 0,
        },
    };
}

export function mapAstro(astro: ApiAstro): AstroType {
    return {
        sunrise: astro.sunrise,
        sunset: astro.sunset,
        moonrise: astro.moonrise,
        moonset: astro.moonset,
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
            return [{
                time: item.time,
                temp_c: item.temp_c,
                temp_f: item.temp_f,
                text: item.condition.text,
                icon: item.condition.icon,
            }];
        }

        return [];
    });
}
