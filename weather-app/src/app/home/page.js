"use client";
import React, { useState } from "react";
import Image from "next/image";
import Search from "@/components/search/page";
import Weather from "@/components/weather/page";
import Weatherimg from "@/assets/image/weather.png";
import Tab from "@/components/tabs/page";


const Home = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="bg-slate-600 h-full w-screen pb-20">
      <div className="max-w-[1200px] mx-auto pt-5">
        <header className="relative">
          <div className="text-white font-thin text-[50px]">
            <Image
              src={Weatherimg}
              height={50}
              width={50}
              alt="WeatherMe Logo"
              className="absolute top-5 left-[-30px]"
            />
            Weather<span className="text-yellow-400">Me</span>
          </div>
          <Tab activeTab={activeTab} onChange={setActiveTab} />
        </header>
        <div className="text-center mt-10">
          <Search />
        </div>
        <div className="mt-10">
          <Weather
            bgcolor={
              activeTab === "today"
                ? "linear-gradient(to right, #AD36CB 27%, #333333 69%)"
                : activeTab === "tomorrow"
                ? "linear-gradient(to right, #009ACD 15%, #333333 85%)"
                : "linear-gradient(to right, #D97706 15%, #333333 85%)"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
