import React, { createContext, useEffect, useReducer, useRef, useState } from 'react'
import { songsData } from '../assets/assets';
import { isRouteErrorResponse } from 'react-router-dom';

// Create context for global player state
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    // Ref for controlling audio element globally
    const audioRef = useRef();
    const songBg = useRef();
    const songBar = useRef();
 
    // State for controlling audio element globally
    const [track,setTrack] = useState(songsData[0])
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0,       
        },
        totalTime: {
              second:0,
            minute:0,    
        }
    })


    // Function for playing song at wherever user clicks on the bar 
    const playSongAtBar = (e) => {
    const clickPosition = e.nativeEvent.offsetX;
    const barWidth = songBg.current.offsetWidth;
    const duration = audioRef.current.duration;

    if (!isNaN(duration)) {
        const newTime = (clickPosition / barWidth) * duration;
        audioRef.current.currentTime = newTime;
    }
    };

    // Function for play button
    const play = () =>{
        if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Play error:", err);
      });
    }
        setPlayerStatus(true)
    }

    // fuction to play selected song with id
    const playSongId = (id) => {
    setTrack(songsData[id]);
    setPlayerStatus(true);


    setTimeout(() => {
        play();
    }, 100); 
    };

    const pause = () =>{
        audioRef.current.pause();
        setPlayerStatus(false)
    }

    const previousSong = () => {
        if (track.id > 0) {
            setTrack(songsData[track.id - 1]);
            setPlayerStatus(true);
        }
    };

    const nextSong = () => {
        if (track.id < songsData.length - 1) {
            setTrack(songsData[track.id + 1]);
            setPlayerStatus(true);
        }
    };


    useEffect(() => {
        if (playerStatus && audioRef.current) {
            audioRef.current.play().catch((err) => {
                console.error("Playback error:", err);
            });
        }
    }, [track]);


    




    useEffect(() =>{
        setTimeout(()=> {
            audioRef.current.ontimeupdate = () => {
              songBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + '%'
                setTime({
        currentTime:{
            second:Math.floor(audioRef.current.currentTime %60),
            minute:Math.floor(audioRef.current.currentTime /60),       
        },
        totalTime: {
              second:Math.floor(audioRef.current.duration %60),
            minute:Math.floor(audioRef.current.duration /60), 
        }
    })
            }
        }, 1000)
    },[audioRef]
)

    const contextValue = {
        //ref
        audioRef,
        songBar,
        songBg,
        //state
        track,
        setTrack,
        playerStatus,
        setPlayerStatus,
        time,
        setTime,
        play,pause, playSongId,
        previousSong, nextSong,
        playSongAtBar

    }

    return (
        // Provide audioRef to all child components
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;



