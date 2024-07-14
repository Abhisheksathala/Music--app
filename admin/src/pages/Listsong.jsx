import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Listsong = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:4000";
  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/songs/listsong`);
      if (response.data.success) {
        setSongs(response.data.data); // Update songs with response.data.data
      } else {
        setError("Failed to fetch songs");
      }
    } catch (error) {
      setError("Failed to fetch songs");
      console.error("Error fetching songs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []); // Empty dependency array ensures this effect runs once after initial render

  const handleDeleteSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/songs/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSongs();
        console.log("Song deleted successfully");
      } else {
        console.error("Failed to delete song:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">List of Songs</h1>
      <ul className="space-y-6">
        {songs.map((song) => (
          <li
            key={song._id}
            className="bg-white shadow-md rounded-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={song.image}
                alt={song.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h2 className="text-lg font-bold">{song.name}</h2>
                <p className="text-sm text-gray-500">{song.album}</p>
                <p className="text-sm text-gray-500">
                  Duration: {song.duration}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleDeleteSong(song._id)}
                className="py-1 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listsong;
