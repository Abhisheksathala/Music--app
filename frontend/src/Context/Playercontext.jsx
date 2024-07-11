import { createContext } from "react";
import { useRef, useState } from "react";
import { songsData } from "../assets/assets";
import { useEffect } from "react";

export const Playercontext = createContext();

const Playercontectprovider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[1]);
  const [playerStatus, setplayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  const play = ()=>{
    if (!audioRef.current) return;
    audioRef.current.play();
    setplayerStatus(true);
  }
  const pause = ()=>{
    if (!audioRef.current) return;
    audioRef.current.pause();
    setplayerStatus(false);
  }

  const platWithId=async(id)=>{
  await  setTrack(songsData[id])
  await audioRef.current.play()
  setplayerStatus(true)
  }

  useEffect(()=>{
setTimeout(()=>{
  audioRef.current.ontimeupdate=()=>{
    seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+'%';
    setTime({
      currentTime: {
        second: Math.floor(audioRef.current.currentTime%60),
        minute: Math.floor(audioRef.current.currentTime/60),
      },
      totalTime: {
        second: Math.floor(audioRef.current.duration%60),
        minute: Math.floor(audioRef.current.duration/60),
      },
    })
  }
},1000)
  },[audioRef])



  const previous = async ()=>{
    if (track.id>0) {
      await setTrack(songsData[track.id-1])
      await audioRef.current,play()
      setplayerStatus(true)
      
    }
  }
  const next = async ()=>{
    if (track.id<songsData.length-1) {
      await setTrack(songsData[track.id+1])
      await audioRef.current,play()
      setplayerStatus(true)
      
    }
  }

  const seeksong = async (e) => {
    if (audioRef.current && seekBg.current) {
      const seekBgWidth = seekBg.current.offsetWidth;
      const clickOffsetX = e.nativeEvent.offsetX;
      const audioDuration = audioRef.current.duration;
  
      if (seekBgWidth && audioDuration) {
        audioRef.current.currentTime = (clickOffsetX / seekBgWidth) * audioDuration;
      }
    }
  };
  


  const contextValue = {
    audioRef,
    seekBg,
    seekBar,

    track,
    playerStatus,
    time,

    setTrack,
    setplayerStatus,
    setTime,

    play,
    pause,

    platWithId,

    previous,
    next,
    seeksong
  };

  return (
    <Playercontext.Provider value={contextValue}>
      {props.children}
    </Playercontext.Provider>
  );
};

export default Playercontectprovider;
