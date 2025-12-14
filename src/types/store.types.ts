export type Coordinates = {
    lat: number,
    long: number
} | null

export type Unit = "metric" | "imperial"
export type Scale = "C" | "F"

export interface WeatherState {
    currentLocation: string;
    unit: Unit;
    scale: Scale;
    favourites: string[];
    coords: Coordinates;

    // actions
    setCurrentLocation: (location: string) => void;
    setUnit: (unit: Unit) => void;
    setScale: (scale: Scale) => void;
    addFavourite: (city: string) => void;
    removeFavourite: (city: string) => void;
    setCoords: (coords: Coordinates) => void;
    clearFavourite: () => void;
}