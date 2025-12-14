export interface LocationType {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
}

export interface CurrentType {

    condition: {
        text: string;
        icon: string;
        code: number;
    };

    temperature: {
        celsius: {
            actual: number;
            feelsLike: number;

        };
        fahrenheit: {
            actual: number;
            feelsLike: number;
        };
    };
}


export interface CurrentAtmosphereType {
    metric: {
        windKph: number;
        visibilityKm: number;
        pressureMb: number;
        dewPointC: number;
    };

    imperial: {
        windMph: number;
        visibilityMiles: number;
        pressureIn: number;
        dewPointF: number;
    };

    humidity: number;
    cloud: number;
    uv: number;

}

export interface AstroType {
    sunrise: string
    sunset: string;
    moonrise: string;
    moonset: string;
    moonphase:string;
}

export interface HourlyType {
    time: string;
    temp_c: number;
    temp_f: number;
    text: string;
    icon: string;
}

export type HourlyArray = Array<HourlyType>;

export interface ForecastType {
    date: string;
    day:{
        maxtemp_c: number;
        mintemp_c: number;
        mintemp_f: number;
        maxtemp_f: number;
        condition:{
            text: string;
            icon: string;
        }
    }
    hourly: HourlyArray;
}

export type ForecastArray = Array<ForecastType>;

export type WeatherDataType = {
    location: LocationType;
    current: CurrentType,
    atmospheric: CurrentAtmosphereType,
    astro: AstroType,
    hourly: HourlyArray,
    forecast:ForecastArray
}

export interface CityType {
    id:number;
    name: string;
}

export type CityArray = Array<CityType>;