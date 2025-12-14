import {AstroType, HourlyArray} from "@/types/weather.types";

export type ApiLocation = {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id?: string;
    localtime_epoch?: number;
    localtime: string;
};


export interface ApiCondition {
    text: string;
    icon: string;
    code: number;
}

export interface ApiCurrent {

    temp_c: number;
    temp_f: number;
    condition: ApiCondition;
    wind_mph: number;
    wind_kph: number;
    pressure_mb: number;
    pressure_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
}

export interface ApiAstro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
}

export interface ApiHour {
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: 0 | 1;
    condition: {
        text: string;
        icon: string;
    };
}

export interface ApiForecast {
    date: string;
    day:{
        mintemp_c: number;
        maxtemp_c: number;
        mintemp_f: number;
        maxtemp_f: number;
        condition: {
            text: string;
            icon: string;
        }
    }
    hour:ApiHourArray
    astro:AstroType
}

export type ApiForecastArray = Array<ApiForecast>

export type ApiHourArray = Array<ApiHour>;

export interface ApiSearchCity {
    id:number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url:string;
}

export type ApiSearchCityArray = Array<ApiSearchCity>;