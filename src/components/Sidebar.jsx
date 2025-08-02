import React from 'react'
import { assets } from '../assets/assets'
import { House,  Search, Layers, ArrowRight, Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full  p-2 flex flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center cursor-pointer gap-3 pl-8'>
          <House className='w-6' />
          <p className='font-bold'>Home</p>
        </div>  
        <div className='flex items-center cursor-pointer gap-3 pl-8'>
          < Search  className='w-6' />
          <p className='font-bold'>Search</p>
        </div>  
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
                <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Layers className="w-6 h-6" />
                            <p className="font-semibold">Your Library</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <ArrowRight className="w-5 h-5" />
                            <Plus className="w-5 h-5" />
                        </div>
                </div>
        
        <div className='p-4 bg-[#242424] m-2  rounded font-semibold fle flex-col items-start
         justify-start gap-1 pl-4'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>It's simple</p>
             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Create Playlist</button>
         </div>

                  <div className='p-4 bg-[#242424] m-2  rounded font-semibold fle flex-col items-start
         justify-start gap-1 pl-4 mt-4'>
            <h1>Find a podcast to follow</h1>
            <p className='font-light'>we'll keep you updated on new episodes</p>
             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Browse podcasts</button>
         </div>
           
      </div>
    </div>
  )
}

export default Sidebar
