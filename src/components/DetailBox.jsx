import React from 'react'
import Detail from './Detail'
import {
    IoMdSunny,
    IoMdRainy,
    IoMdCloudy,
    IoMdSnow,
    IoMdThunderstorm,
    IoMdSearch,
} from 'react-icons/io';
import { FiSunrise, FiSunset, FiWind, FiEye } from "react-icons/fi";
import { WiRaindrop, WiHumidity } from "react-icons/wi";
import { TbArrowsDown, TbTemperature } from "react-icons/tb";
export default function DetailBox() {
    return (
        <>

            <div className="flex flex-col w-full mt-12">
                <p className="text-white/70 text-sm font-normal mb-2">Weather Updates</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full gap-4">
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">SUNRISE</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">06:57am <FiSunrise/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">SUNSET</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">05:04pm <FiSunset/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">PRECIPITATION</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between items-center">60% <span className="scale-[2] origin-center"><WiRaindrop/></span> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">HUMIDITY</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between items-center">15%  <span className="scale-[1.5] origin-center"><WiHumidity/></span> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">WIND</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">16km/h <FiWind/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">PRESSURE</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">1021 hPa <TbArrowsDown/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">FEELS LIKE</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">11°C <TbTemperature/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">VISIBILITY</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">50km <FiEye/> </p>
                    </div>

                </div>
            </div>
        </>
    )
}
