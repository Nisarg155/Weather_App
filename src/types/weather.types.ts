export interface LocationType {
    name:string;
    region:string;
    country:string;
    lat:number;
    lon:number;
    localtime:string;
}

export interface CurrentType {
    lastUpdatedEpoch: number;
    lastUpdated: string;
    isDay: number;

    condition: {
        text: string;
        icon: string;
        code: number;
    };

    temperature: {
        celsius: {
            actual: number;
            feelsLike: number;
            windChill: number;
            heatIndex: number;
        };
        fahrenheit: {
            actual: number;
            feelsLike: number;
            windChill: number;
            heatIndex: number;
        };
    };

    metric: {
        windKph: number;
        gustKph: number;
        visibilityKm: number;
        precipitationMm: number;
        pressureMb: number;
        dewPointC: number;
    };

    imperial: {
        windMph: number;
        gustMph: number;
        visibilityMiles: number;
        precipitationIn: number;
        pressureIn: number;
        dewPointF: number;
    };

    wind: {
        direction: string;
    };

    humidity: number;
    cloud: number;
    uv: number;

    solar: {
        shortRad: number;
        diffRad: number;
        dni?: number;
        gti?: number;
    };
}

export interface AstroType {
    sunrise:string
    sunset:string;
    moonrise:string;
    moonset:string;
}

export interface HourlyType {
    time:string;
    temp_c:number;
    temp_f:number;
    text:string;
    icon:string;
}

export type HourlyArray = Array<HourlyType>;

export type CurrentDataType =  {
    location:LocationType;
    current:CurrentType,
    astro:AstroType,
    hourly:HourlyArray
}