import { createContext } from "react";
import { useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const Playercontext = createContext();

const Playercontectprovider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
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
  };

  return (
    <Playercontext.Provider value={contextValue}>
      {props.children}
    </Playercontext.Provider>
  );
};

export default Playercontectprovider;
