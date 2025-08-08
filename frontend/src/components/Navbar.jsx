import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigator = useNavigate(); // Hook to navigate back and forward in history

  return (
    <>
      {/* Top navigation bar */}
      <div className='w-full flex font-semibold justify-between items-center border-blue-2xl'>
        <div className='flex items-center gap-2'>
          <ChevronLeft onClick={() => navigator(-1)} className='w-10 h-10 bg-black p-2 rounded-2xl cursor-pointer  hover:text-[#1DB954] transition-colors duration-300 ' />
          <ChevronRight onClick={() => navigator(1)} className='w-10 h-10 bg-black p-2 rounded-2xl cursor-pointer hover:text-[#1DB954] transition-colors duration-300 ' />
        </div>

        {/* User action buttons */}
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Buy Premium</p>
          <p className='bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer'>Install App</p>
          <p className='bg-purple-500 w-7 h-7 text-black flex items-center rounded-full cursor-pointer justify-center'>J</p>
        </div>
      </div>

      {/* Category filter buttons */}
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>All</p>
        <p className='bg-black text- textwhite-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Music</p>
        <p className='bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar

