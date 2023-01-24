import React from 'react'
import {
    IoMdSunny,
    IoMdRainy,
    IoMdCloudy,
    IoMdSnow,
    IoMdThunderstorm,
    IoMdSearch,
} from 'react-icons/io';
export default function Hourly() {
    return (
        <>
            <div className="z-20 w-full h-[160px] flex flex-row flex-wrap items-center mt-12 md:mt-0 justify-center md:justify-end">
                <div className="flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">Now</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                        <IoMdCloudy />
                    </p>
                    <p className="text-white text-2xl">12°</p>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">Now</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                        <IoMdCloudy />
                    </p>
                    <p className="text-white text-2xl">12°</p>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">Now</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                        <IoMdCloudy />
                    </p>
                    <p className="text-white text-2xl">12°</p>
                </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">Now</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                        <IoMdCloudy />
                    </p>
                    <p className="text-white text-2xl">12°</p>
                </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">Now</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                        <IoMdCloudy />
                    </p>
                    <p className="text-white text-2xl">12°</p>
                </div>
                </div>
            </div>
        </>
    )
}
