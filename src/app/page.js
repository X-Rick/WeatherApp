import Image from "next/image";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
export default function Home() {
  return (
    <div>
      <Header />
      < CurrentWeather />
    </div>
      );
}
