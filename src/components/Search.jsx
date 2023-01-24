import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io';
export default function Search({city,setCity}) {
    const hours = new Date().getHours();
    const [width, setWidth] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [animate, setAnimate] = useState(false);
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setWidth(false);
        if (inputValue !== '') {
            setCity(inputValue);
        }
        if (inputValue == '') {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
            }, 500);
            setWidth(false);
        } else {
            setWidth(true);
            setTimeout(() => {
                setWidth(false);
            }, 500);
        }
        setInputValue('');
    };
    return (
        <form
            className={`${animate ? 'animate-shake' : 'animate-none'} z-20 h-12 bg-white/10 w-full max-w-[600px] rounded-full backdrop-blur-[100px] mb-8 overflow-hidden`}>
            <div className='h-full relative flex items-center justify-between overflow-hidden'>
                <input value={inputValue}
                    onChange={(e) => handleInput(e)}
                    className='flex-1 bg-transparent outline-none placeholder:text-white/40 text-white/40 text-[15px] font-light pl-6 h-full'
                    type='text'
                    placeholder='Enter city or country'
                />
                <button
                    onClick={(e) => handleSubmit(e)}
                    className={`absolute right-0 top-0 bt${hours} opacity-30 hover:opacity-90 transition-all duration-300 ${width ? 'hover:w-full' : 'hover:w-24'} h-12 w-24 rounded-full flex justify-center items-center backdrop-blur-[32px]`}
                >
                    <IoMdSearch className='text-2xl text-white' />
                </button>
            </div>
        </form>
    )
}
