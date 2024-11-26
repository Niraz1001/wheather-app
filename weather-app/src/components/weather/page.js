"use client";
import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { CiTempHigh } from "react-icons/ci";
import temp from "@/assets/image/temp.png";
import Image from "next/image";

const Weather = ({ bgcolor, apidata }) => {
  
  if (!apidata || !apidata.main) {

    return (
      <div
        className="h-[400px] w-[1000px] mx-auto rounded-2xl text-white flex items-center justify-center"
        style={{ background: bgcolor }}
      >
        <p>Loading weather data...</p>
      </div>
    );
  }

  const data = [
    {
      title: "Humidity",
      value: `${apidata.main.humidity}`,
      unit: "%",
    },
    {
      title: "Visibility",
      value: `${(apidata.visibility / 1000).toFixed(1)}`, // Convert visibility from meters to km
      unit: "km",
    },
    {
      title: "Air Pressure",
      value: `${apidata.main.pressure}`, // Correctly fetch air pressure
      unit: "hPa",
    },
    {
      title: "Wind",
      value: `${apidata.wind.speed}`, // Fetch wind speed
      unit: "m/s",
    },
  ];

  return (
    <div
      className="h-[400px] w-[1000px] mx-auto rounded-2xl text-white"
      style={{ background: bgcolor }}
    >
      <div className="py-14 px-10">
        <div className="text-[30px]">
          {apidata.name} <TfiLocationPin className="inline" />
        </div>
        <div className="flex items-center justify-center gap-3 text-[70px]">
          <CiTempHigh /> <p>{apidata.main.temp}°C</p>
          <Image src={temp} height={150} width={150} alt="temp img" />
        </div>
        <div className="underline underline-offset-4 text-[30px]">
          {new Date(apidata.dt * 1000).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>

        <div className="flex justify-around items-center mt-10">
          {data.map((val, idx) => (
            <div key={idx}>
              <h3 className="text-[20px]">{val.title}</h3>
              <p className="text-center text-[20px]">
                {val.value}
                <span>{val.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
