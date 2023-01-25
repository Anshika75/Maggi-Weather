import React from 'react'

import {
    IoMdSunny,
    IoMdRainy,
    IoMdCloudy,
    IoMdSnow,
    IoMdThunderstorm,
    IoMdSearch,
} from 'react-icons/io';
import GetIcon from '../helpers/GetIcon';
function day(dt) {
    const days = ["Sun", "Mon", "{day(data[1].dt)}", "Wed", "Thur", "Fri", "Sat"];
    return `${days[new Date(dt*1000).getDay()]}`;
}
function date(dt) {
    const days = ["Sun", "Mon", "{day(data[1].dt)}", "Wed", "Thur", "Fri", "Sat"];
    return `${days[new Date(dt*1000).getDay()]}`;
}
export default function Table({data}) {
    return (
        <>
            <div className="hidden md:flex flex-col w-full z-20">
            <p className="text-white/70 text-sm font-normal">Hourly Updates</p>
            <table className='w-full border-separate border-spacing-x-0 border-spacing-y-3'>
                <tbody>
                <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">{day(data[1].dt)}</p>
                        <p className="text-white text-[15px] font-light">{new Date(data[1].dt*1000).getMonth()+1}/{new Date(data[1].dt*1000).getDate()}</p>

                    </td>
                    <td className="text-center">
                        <p className="text-white text-5xl grid place-items-center">
                            <IoMdCloudy />
                        </p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">9°</p>
                        <p className="text-white text-[15px] font-light">Min</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">11°</p>
                        <p className="text-white text-[15px] font-light">Max</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">12mph</p>
                        <p className="text-white text-[15px] font-light">Wind</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">0%</p>
                        <p className="text-white text-[15px] font-light">Rain</p>
                    </td>
                </tr>
                <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">{day(data[2].dt)}</p>
                        <p className="text-white text-[15px] font-light">30/7</p>

                    </td>
                    <td className="text-center">
                        <p className="text-white text-5xl grid place-items-center">
                            <IoMdCloudy />
                        </p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">9°</p>
                        <p className="text-white text-[15px] font-light">Min</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">11°</p>
                        <p className="text-white text-[15px] font-light">Max</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">12mph</p>
                        <p className="text-white text-[15px] font-light">Wind</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">0%</p>
                        <p className="text-white text-[15px] font-light">Rain</p>
                    </td>
                </tr>
                <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">{day(data[3].dt)}</p>
                        <p className="text-white text-[15px] font-light">30/7</p>

                    </td>
                    <td className="text-center">
                        <p className="text-white text-5xl grid place-items-center">
                            <IoMdCloudy />
                        </p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">9°</p>
                        <p className="text-white text-[15px] font-light">Min</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">11°</p>
                        <p className="text-white text-[15px] font-light">Max</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">12mph</p>
                        <p className="text-white text-[15px] font-light">Wind</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">0%</p>
                        <p className="text-white text-[15px] font-light">Rain</p>
                    </td>
                </tr>
                <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">{day(data[4].dt)}</p>
                        <p className="text-white text-[15px] font-light">30/7</p>

                    </td>
                    <td className="text-center">
                        <p className="text-white text-5xl grid place-items-center">
                            <IoMdCloudy />
                        </p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">9°</p>
                        <p className="text-white text-[15px] font-light">Min</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">11°</p>
                        <p className="text-white text-[15px] font-light">Max</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">12mph</p>
                        <p className="text-white text-[15px] font-light">Wind</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">0%</p>
                        <p className="text-white text-[15px] font-light">Rain</p>
                    </td>
                </tr>
                <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">{day(data[5].dt)}</p>
                        <p className="text-white text-[15px] font-light">30/7</p>

                    </td>
                    <td className="text-center">
                        <p className="text-white text-5xl grid place-items-center">
                            <IoMdCloudy />
                        </p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">9°</p>
                        <p className="text-white text-[15px] font-light">Min</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">11°</p>
                        <p className="text-white text-[15px] font-light">Max</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">12mph</p>
                        <p className="text-white text-[15px] font-light">Wind</p>
                    </td>
                    <td className="text-center">
                        <p className="text-white text-2xl font-normal">0%</p>
                        <p className="text-white text-[15px] font-light">Rain</p>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}
