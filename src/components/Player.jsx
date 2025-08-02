import React from 'react'
import { assets, songsData } from '../assets/assets'
import { Shuffle, Play,  Maximize2 ,SkipBack, Speaker, Volume2  , SkipForward, Repeat, MicVocal, ListMusic } from 'lucide-react'
const Player = () => {
  return (
    <div className='h-[10%]  bg-black flex text-white justify-between items-center px-4'>
        <div className='lg:flex hidden items-center gap-4'>
            <img className='w-12' src={songsData[0].image} alt=""/>
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <Shuffle className='cursor-pointer w-4'/>
                    <SkipBack className='cursor-pointer w-4'/>
                    <Play className='cursor-pointer w-4'/>
                    <SkipForward className='cursor-pointer w-4'/>
                    <Repeat className='cursor-pointer w-4'/>
                </div>

                <div className='flex items-center gap-5'>
                    <p>2:34</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                    </div>
                    <p>4:05</p>
                </div>
        </div>

        <div className='hidden lg:flex gap-2 items-center opacity-75 '>
            
            <Play className='cursor-pointer w-4'/>
            <MicVocal className='cursor-pointer w-4'/>
            <ListMusic className='cursor-pointer w-4'/>
            <Speaker className='cursor-pointer w-4'/>
            <Volume2 className='cursor-pointer w-4'/>


            <div className='w-20 bg-slate-50 h-1 rounded'>
            
            </div> 
            <img className='cursor-pointer w-4' src= {assets.mini_player_icon} alt=''/>
            <Maximize2  className='cursor-pointer w-4'/>
        </div>
    </div>
  )
}

export default Player
