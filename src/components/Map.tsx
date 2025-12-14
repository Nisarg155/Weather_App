"use client";

import {MapContainer, TileLayer, Marker, useMapEvents} from "react-leaflet";
import {useEffect, useRef, useState} from "react";
import L from "leaflet";
import {useStore} from "@/lib/useStore";
import {fetchCityBasedOnLatLong} from "@/Services/WeatherAPI";

const markerIcon = new L.Icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function MapSelector() {
    const {coords, setCurrentLocation} = useStore();

    // Default coords (Vadodara)
    const defaultLat = coords!.lat;
    const defaultLon = coords!.long;
    const mapRef = useRef<L.Map | null>(null);


    const [position, setPosition] = useState<[number, number]>([
        defaultLat,
        defaultLon,
    ]);

    useEffect(() => {
        if (!coords) return;

        setPosition([coords.lat, coords.long]);

        if (mapRef.current) {
            mapRef.current.setView([coords.lat, coords.long], mapRef.current.getZoom(), {
                animate: true,
            });
        }

    }, [coords]);

    // Map click handler
    function MapClickHandler() {
        useMapEvents({
            click(e) {
                const {lat, lng} = e.latlng;

                setPosition([lat, lng]);     // update marker
                handleReverseGeocode(lat, lng); // your own resolve logic later
            },
        });
        return null;
    }

    // Marker drag handler
    function DraggableMarker() {
        const markerRef = useRef<L.Marker>(null);

        return (
            <Marker
                position={position}
                draggable={true}
                icon={markerIcon}
                ref={markerRef}
                eventHandlers={{
                    dragend() {
                        const marker = markerRef.current;
                        if (!marker) return;

                        const {lat, lng} = marker.getLatLng();
                        setPosition([lat, lng]);
                        handleReverseGeocode(lat, lng);
                    },
                }}
            />
        );
    }


    async function handleReverseGeocode(lat: number, long: number) {

        const city = await fetchCityBasedOnLatLong({lat, long})
        if (!city) return;
        setCurrentLocation(city!.name);
    }

    return (
        <div className="w-full mt-4 h-64 rounded-xl overflow-hidden border border-slate-700">
            <MapContainer
                center={[defaultLat, defaultLon]}
                zoom={11}
                scrollWheelZoom={true}
                className="w-full h-full"
                ref={mapRef}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <MapClickHandler/>
                <DraggableMarker/>
            </MapContainer>
        </div>
    );
}
