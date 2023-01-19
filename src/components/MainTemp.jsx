import React from 'react'
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from 'react-icons/io';

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from 'react-icons/bs';

import { TbTemperatureCelsius } from 'react-icons/tb';

export default function MainTemp() {
  return (
    <>
      <div className="flex flex-col rounded-md bg-white/10 backdrop-blur-[100px] p-5 shadow-sm">
        <div className="flex flex-row items-end pb-3">
          <p className='text-5xl font-semibold text-white opacity-80'>15<span>°</span>C</p> 
          <p className='ml-2 text-white font-light'>Sunny</p>
        </div>
        <div className="flex flex-row items-center border-t-[1px] border-white/10 pt-3">
          <div className="grid place-items-center text-white text-5xl">
            <IoMdCloudy />
          </div>
          <div className="flex flex-col justify-center ml-2">
            <p className='text-white uppercase font-extralight text-[10px] leading-[12px]'>Ambala</p>
            <p className='text-white uppercase font-extralight text-[10px] leading-[12px]'>Monday, 18/01/2023</p>
          </div>
        </div>
      </div>
    </>
  )
}
