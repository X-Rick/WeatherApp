"use client";
import { useEffect, useState } from 'react';
import dailyForecast from '../api/daily-forecast.json';

function Forecast() {
    const [dailyData, setDailyData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        // Accede a los datos anidados dentro de daily.data
        if (dailyForecast && dailyForecast.daily && dailyForecast.daily.data) {
            setDailyData(dailyForecast.daily.data);
        }
    }, []);

    const handleNext = () => {
        if (startIndex + 5 < dailyData.length) {
            setStartIndex(startIndex + 5);
        }
    };

    const handlePrev = () => {
        if (startIndex - 5 >= 0) {
            setStartIndex(startIndex - 5);
        }
    };

    const visibleData = dailyData.slice(startIndex, startIndex + 5);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Siguientes días</h1>
            {dailyData.length > 0 ? (
                <div className="relative">
                    <div className="overflow-x-auto">
                        <div className="flex space-x-4">
                            {visibleData.map((day, index) => (
                                <div key={index} className="flex-shrink-0 m-2 p-4 bg-white shadow-lg rounded-lg w-60">
                                    <p className="text-lg font-semibold">{day.day}</p>
                                    <p className="text-md">{day.weather}</p>
                                    <p className="text-md">{day.temperature}°C</p>
                                    <p className="text-md">{day.summary}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                        disabled={startIndex === 0}
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
                        disabled={startIndex + 5 >= dailyData.length}
                    >
                        &#8250;
                    </button>
                </div>
            ) : (
                <div className="text-center text-gray-500">No data available</div>
            )}
        </div>
    );
}

export default Forecast;