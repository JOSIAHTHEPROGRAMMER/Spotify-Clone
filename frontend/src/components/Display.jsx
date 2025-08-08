import { Route, Routes, useLocation } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef(); // Reference to the main display container
  const loc = useLocation();   // Get current route info

  const isAlbum = loc.pathname.includes("album"); // Check if current route is an album page
  const albumId = isAlbum ? loc.pathname.slice(-1) : "";
  const albumBgColour = albumsData[Number(albumId)].bgColor; // Get background color for album

  useEffect(() => {
    // Change background based on route
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${albumBgColour},#121212)`
    } else {
      displayRef.current.style.background = `#121212`
    }
  })

  return (
    // Main display area with route-based rendering
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display

