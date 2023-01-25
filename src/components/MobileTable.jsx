import React from 'react'
import { IoMdCloudy } from 'react-icons/io';
export default function MobileTable() {
    return (
        <>
            <div className="z-20 flex flex-col w-full md:hidden">
                <p className="text-white/70 text-sm font-normal">Hourly Updates</p>
                <table className='w-full border-separate border-spacing-x-0 border-spacing-y-3'>
                    <tbody>
                        <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                            <td className="text-center">
                                <p className="text-white text-2xl font-normal">Tue</p>
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
                        </tr>
                        <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                            <td className="text-center">
                                <p className="text-white text-2xl font-normal">Tue</p>
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
                        </tr>
                        <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                            <td className="text-center">
                                <p className="text-white text-2xl font-normal">Tue</p>
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
                        </tr>
                        <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                            <td className="text-center">
                                <p className="text-white text-2xl font-normal">Tue</p>
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
                        </tr>
                        <tr className='w-full h-[75px] bg-white/10 backdrop-blur-[100px] shadow-sm'>
                            <td className="text-center">
                                <p className="text-white text-2xl font-normal">Tue</p>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
