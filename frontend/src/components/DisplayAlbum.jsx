import React, { useCallback, useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { Clock } from 'lucide-react'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
    const { id } = useParams(); // Get album ID from URL
    const albumData = albumsData[id]; // Get album data using ID
   
    const {playSongId} = useContext(PlayerContext);

    return (
        <>
            <Navbar />
            
            {/* Album header */}
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt={albumData.name} />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt={albumData.name} />
                        <b> Spotify</b>
                        • 381,181 likes 
                        • <b>67 songs,</b> about 3hrs 20 mins
                    </p>
                </div>
            </div>

            {/* Songs table header */}
            <div className='grid gird-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <Clock className='m-auto w-4' />
            </div>

            <hr />

            {/* Song list */}
            {
                songsData.map((song, index) => (
                    <div onClick={()=>playSongId(song.id)} key={index} className='grid grid-cols-3 gap-2 sm:grid-cols-4 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <img className='inline w-10 mr-5' src={song.image} alt={song.name} />
                            {song.name}
                        </p>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>24 days ago</p>
                        <p className='text-[15px] text-center'>{song.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default DisplayAlbum
