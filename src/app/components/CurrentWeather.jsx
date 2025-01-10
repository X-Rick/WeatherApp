"use client";

import { useEffect, useState } from 'react';
import { getCurrentWeather } from "../api";

function CurrentWeather() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const weatherData = await getCurrentWeather();
                setData(weatherData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center text-gray-500">Cargando...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error al cargar los datos: {error.message}</div>;
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center mb-4">Current Weather</h1>
                <div className="text-center">
                    <p className="text-lg">{data.weather}</p>
                    <p className="text-4xl font-bold">{data.temperature}°C</p>
                    <p className="text-gray-600">{data.summary}</p>
                    {data.icon_num && (
                        <img
                            className="mx-auto mt-4"
                            src={`/dist/weather_icons/set04/big/${data.icon_num}.png`}
                            alt="Weather Icon"
                        />              
                    )}
                </div>
            </div>
            <div className="value">
                <span className="label">Temperature:</span>
                <span className="value">{data.temperature}°C</span>
            </div>  
        </div>
    );
}

export default CurrentWeather;