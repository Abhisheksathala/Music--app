import { songsData } from "./../../assets/assets";
import { assets } from "./../../assets/assets";
import { useContext } from "react";
import { Playercontext } from "./../../Context/Playercontext";

const Player = () => {
  const { seekBg, seekBar } = useContext(Playercontext);
  return (
    <div className="h-[10%] bg-gradient-to-r from-gray-800 to-black flex justify-between items-center text-white px-4 py-2 shadow-lg">
      <div className="hidden lg:flex items-center gap-4">
        <img
          src={songsData[0].image}
          className="w-12 h-12 rounded-lg"
          alt="song cover"
        />
        <div>
          <p className="text-sm font-semibold">{songsData[0].name}</p>
          <p className="text-xs text-gray-400">
            {songsData[0].desc.slice(0, 12)}...
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 m-auto">
        <div className="flex gap-3">
          <img
            src={assets.shuffle_icon}
            className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
            alt="shuffle"
          />
          <img
            src={assets.prev_icon}
            className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
            alt="previous"
          />
          <img
            src={assets.play_icon}
            className="w-5 h-5 cursor-pointer transition-transform transform hover:scale-125"
            alt="play"
          />
          <img
            src={assets.next_icon}
            className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
            alt="next"
          />
          <img
            src={assets.loop_icon}
            className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
            alt="loop"
          />
        </div>
        <div className="flex items-center gap-5 w-full">
          <p className="text-xs">1:06</p>
          <div ref={seekBg} className="w-full max-w-[500px] bg-gray-700 rounded-full cursor-pointer overflow-hidden">
            <div ref={seekBar} className="h-1 bg-green-500 rounded-full w-[30%]"></div>
          </div>
          <p className="text-xs">3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-3 opacity-75">
        <img
          src={assets.play_icon}
          className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
          alt="play"
        />
        <img
          src={assets.mic_icon}
          className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
          alt="mic"
        />
        <img
          src={assets.queue_icon}
          className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
          alt="queue"
        />
        <img
          src={assets.speaker_icon}
          className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
          alt="speaker"
        />
        <img
          src={assets.volume_icon}
          className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
          alt="volume"
        />
        <div className="w-16 bg-gray-300 h-1 rounded"></div>
        <img
          src={assets.mini_player_icon}
          className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
          alt="mini player"
        />
        <img
          src={assets.zoom_icon}
          className="w-4 h-4 cursor-pointer transition-transform transform hover:scale-110"
          alt="zoom"
        />
      </div>
    </div>
  );
};

export default Player;
