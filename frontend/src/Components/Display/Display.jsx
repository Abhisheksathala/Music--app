import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "../DisplayHome/DisplayHome";
import DisplayAlbum from "./../DisplayAlbum.jsx/DisplayAlbum";
import { useRef, useEffect } from "react";
import { albumsData } from "../../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  // console.log(location);

  const isAlbum = location.pathname.includes("/album");
  // console.log(isAlbum);

  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  // console.log(albumId);
  const bgColor = albumsData[Number(albumId)].bgColor;
  // console.log(bgColor);

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-3/4 lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
