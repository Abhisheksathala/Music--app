import Navbar from "./../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();

  // Find the album based on the id
  const albumData = albumsData[id];
  const albumSongs = songsData;

  if (!albumData) {
    return (
      <div className="text-center text-white">
        <Navbar />
        <p className="mt-10 text-xl">Album not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />

      <div className="mt-10 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row gap-8 md:items-end">
          <img className="w-48 md:w-64 rounded shadow-lg" src={albumData.image} alt={albumData.name} />
          <div>
            <p className="uppercase text-sm text-gray-400 mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h1>
            <p className="text-gray-300">{albumData.desc}</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold my-8">Songs</h2>

        {albumSongs.map((song, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-md shadow hover:bg-gray-700 transition duration-200 mb-4">
            <div className="flex items-center">
              <img className="w-20 h-20 object-cover rounded-md mr-4" src={song.image} alt={song.name} />
              <div className="flex-grow flex gap-2 ">
                <h3 className="text-xl font-bold text-white">{song.name}</h3>
                <p className="text-gray-400">{song.desc}</p>
                <p className="text-gray-500 text-sm mt-1">Duration: {song.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;
