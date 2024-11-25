import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { CiTempHigh } from "react-icons/ci";
import temp from "@/assets/image/temp.png";
import Image from "next/image";

const Weather = (props) => {
  const data = [
    {
      title: "Humidity",
      value: "99",
      unit: "%",
    },
    {
      title: "Visiblity",
      value: "8",
      unit: "km",
    },
    {
      title: "Air Pressure",
      value: "1005",
      unit: "hPa",
    },
    {
      title: "Wind",
      value: "2",
      unit: "mph",
    },
  ];

  return (
    <div
      className="h-[400px] w-[1000px]  mx-auto rounded-2xl text-white "
      style={{background: props.bgcolor}}
    >
      <div className="py-14 px-10">
        <div className="text-[30px]">
          Kathmandu <TfiLocationPin className="inline" />
        </div>
        <div className="flex items-center justify-center gap-3 text-[70px] ">
          <CiTempHigh /> <p>27°C</p>
          <Image src={temp} height={150} width={150} alt="temp img" />
        </div>
        <div className="underline underline-offset-4 text-[30px]">Aug 23, Tue</div>

        <div className="flex justify-around items-center mt-10">
          {data.map((val, idx) => (
            <div key={idx}>
              <h3 className="text-[20px]">{val.title}</h3>
              <p className="text-center text-[20px]">{val.value}<span>{val.unit}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
