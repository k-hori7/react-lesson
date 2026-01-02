import { useState } from "react";

type WeatherType = {
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
};

const fetchWeather = async () => {
  const res = await fetch(`https://XXX`);
  if (res.ok) {
    return (await res.json()) as WeatherType;
  }
  throw new Error(res.statusText);
};

export default function QueryPre() {
  const [data, setData] = useState<WeatherType>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  //略
}
