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
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="grid place-items-center">
            <IoMdCloudy />
          </div>
          <div className="flex flex-col">
            <p className='text-white font-semibold uppercase '>Ambala</p>
            <p>Monday, 18/01/2023</p>
          </div>
        </div>
      </div>
    </>
  )
}
