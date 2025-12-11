import toast from "react-hot-toast";


export async function fetchWeather(city: string) {
    try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/current.json?key=${apiKey}&q=${city}`;
        if (!apiKey) throw new Error("No API key found.");

        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch weather");
        return await response.json();
    } catch (e) {
        console.error(e.message);
    }
}
