import React, {useState} from 'react'
import {IoMdSearch} from 'react-icons/io';
export default function Search() {
        // const hours = new Date().getHours();
        const hours = 7;
        var width;
        const [inputValue, setInputValue] = useState('');
        const [animate, setAnimate] = useState(false);
        const handleInput = (e) => {
          setInputValue(e.target.value);
        };
        const handleSubmit = (e) => {
          if (inputValue !== '') {
            setLocation(inputValue);
          }
          const input = document.querySelector('input');
          if (input.value === '') {
            setAnimate(true);
            width = 'w-24';
            setTimeout(() => {
              setAnimate(false);
            }, 500);
          } else{
            width = 'w-full';
          }
          input.value = '';
          e.preventDefault();
        };
  return (
    <form
        className={`${animate ? 'animate-shake' : 'animate-none'} h-12 bg-black/40 w-full max-w-[600px] rounded-full backdrop-blur-[32px] mb-8 overflow-hidden`}>
        <div className='h-full relative flex items-center justify-between overflow-hidden'>
          <input
            onChange={(e) => handleInput(e)}
            className='flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full'
            type='text'
            placeholder='Enter city or country'
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className={`absolute right-0 top-0 bg${hours+5} opacity-30 hover:opacity-90 transition-all duration-300 hover:${width} h-12 w-24 rounded-full flex justify-center items-center backdrop-blur-[32px]`}
          >
            <IoMdSearch className='text-2xl text-white' />
          </button>
        </div>
      </form>
  )
}
