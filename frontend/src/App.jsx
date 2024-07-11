// eslint-disable-next-line no-unused-vars
import React ,{useContext} from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Player from "./Components/Player/Player";
import Display from "./Components/Display/Display";
import  {Playercontext}  from "./Context/Playercontext";

const App = () => {


  const {audioRef,track} =  useContext(Playercontext)

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
