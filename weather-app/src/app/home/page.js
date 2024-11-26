"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Search from "@/components/search/page";
import Weather from "@/components/weather/page";
import Weatherimg from "@/assets/image/weather.png";
import Tab from "@/components/tabs/page";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 


const Home = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [today, setToday] = useState({});
  const [tomorrow, setTomorrow] = useState({});
  const [search, setsearch] = useState("kathmandu")


  const datafetch = async (city) => {
    try {
    
      const todayResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bc448c9c477646b685f04d85d4f8b904`
      );
      setToday(todayResponse.data);
      
      console.log("Today's Weather:", todayResponse.data);
      
  
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("City not found. Please check the name and try again.");
      } else {
        toast.error("Something went wrong. Please try again later."); 
      }
    }
  };

  useEffect(() => {
    datafetch(search)

  }, [search]);

  const handleSearch = (city) => { 
    setsearch(city)
  };

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
            Weather<span className="text-yellow-400">Me  </span>
          
          </div>
          <Tab activeTab={activeTab} onChange={setActiveTab} />
        </header>


        <div className="text-center mt-10">
          <Search onSearch={handleSearch}/>
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
             
            apidata={
              activeTab==="today" ? today : tomorrow
            }

          />
        </div>


      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Home;
