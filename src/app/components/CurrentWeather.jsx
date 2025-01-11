"use client";

import { useEffect, useState } from 'react';
import { getCurrentWeather } from "../api";
import Tarjet from './Tarjet';

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
        <Tarjet 
            title="Current Weather"
            data={data}
        />
    );
}

export default CurrentWeather;