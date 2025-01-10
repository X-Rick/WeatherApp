"use client"
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
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos: {error.message}</div>;
    }

    return (
        <div>
            <h1>Current Weather</h1>
            <p>{data.weather}</p>
            <p>{data.temperature}</p>
            <p>{data.summary}</p>
            <p>{data.icon_num}</p>
            {data.icon_num && (
                <img
                    src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/big/${data.icon_num}.png`}
                    alt="Weather Icon"
                />
            )}
        </div>
    );
}

export default CurrentWeather;