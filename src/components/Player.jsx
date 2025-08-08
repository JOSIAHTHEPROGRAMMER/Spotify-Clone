import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { Shuffle, Play, Maximize2, SkipBack, Speaker, Volume2, 
    SkipForward, Repeat, 
    MicVocal, ListMusic, Pause } from 'lucide-react'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const {songBg, playSongAtBar,songBar,time, track,playerStatus, play, pause, previousSong, nextSong} = useContext(PlayerContext);

const formatTime = (minute, second) => {
  const safe = (num) =>
    isNaN(num) || num == null ? "00" : String(Math.floor(num)).padStart(2, "0");

  return `${safe(minute)}:${safe(second)}`;
};



  return (
    // Bottom music player bar
    <div className='h-[10%] bg-black flex text-white justify-between items-center px-4'>
      
      {/* Song info (left side, only on large screens) */}
      <div className='lg:flex hidden items-center gap-4'>
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Playback controls and progress bar */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <Shuffle className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
          
          <SkipBack onClick={previousSong} className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />

        {playerStatus ?
           <Pause onClick={pause} className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
          :<Play onClick={play} className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' /> 
          } 
          
          <SkipForward onClick={nextSong} className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
          <Repeat className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
        </div>

        <div className='flex items-center gap-5'>
          <p>{formatTime(time.currentTime.minute, time.currentTime.second)}</p>
          <div ref={songBg} onClick={playSongAtBar} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer '>
            <hr ref={songBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p>{formatTime(time.totalTime.minute, time.totalTime.second)}</p>
        </div>
      </div>

      {/* Extra controls (right side, only on large screens) */}
      <div className='hidden lg:flex gap-2 items-center opacity-75'>
        <Play className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
        <MicVocal className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
        <ListMusic className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
        <Speaker className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
        <Volume2 className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
        
        <div className='w-20 bg-slate-50 h-1 rounded hover:text-[#1DB954] transition-colors duration-300'></div> 
        <img className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' src={assets.mini_player_icon} alt='' />
        <Maximize2 className='cursor-pointer w-4 hover:text-[#1DB954] transition-colors duration-300' />
      </div>
    </div>
  )
}

export default Player
