function Tarjet({ data }) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
        
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
        </div>
      </div>
    );
  }
  
  export default Tarjet;