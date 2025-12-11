export type Condition = { text: string; icon: string };


export type Current = {
    temp_c: number;
    feelslike_c?: number;
    humidity: number;
    wind_kph: number;
    pressure_mb: number;
    condition: Condition;
};


export type Hourly = {
    time: string; // ISO or hh:mm
    temp_c: number;
    icon: string;
};


export type ForecastDay = {
    date: string;
    day: { maxtemp_c: number; mintemp_c: number; condition: Condition };
};