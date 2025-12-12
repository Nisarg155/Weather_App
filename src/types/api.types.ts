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
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: 0 | 1;
    condition: ApiCondition;
    wind_mph: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
    short_rad:number;
    diff_rad:number;
    dni?:number;
    gti?:number;
}

export interface ApiAstro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase?: string;
    moon_illumination?: number;
    is_moon_up?: number;
    is_sun_up?: number;
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

export type ApiHourArray = Array<ApiHour>;