import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  // Access the audioRef from context
  const { audioRef,track } = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      {/* Main content area */}
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>

      {/* Music player bar */}
      <Player />

      {/* Hidden audio element used for playback */}
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
