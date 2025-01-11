import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
export default function Home() {
  return (
    <div>
      <Header />
      <CurrentWeather />
      <Forecast />
    </div>
      );
}
