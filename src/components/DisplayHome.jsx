import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'  
import  AlbumItem  from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='px-4 mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        
        <div className='flex overflow-x-auto gap-4 whitespace-nowrap'>
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className='px-4 mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest hits</h1>
        
        <div className='flex overflow-x-auto gap-4 whitespace-nowrap'>
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome

