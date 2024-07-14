import  { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ListAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:4000";

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/Albums/list`);
      if (response.data.success) {
        setAlbums(response.data.data);
      } else {
        setError('Failed to fetch albums');
      }
    } catch (error) {
      setError('Failed to fetch albums');
      console.error('Error fetching albums:', error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    
    fetchAlbums();
  }, []); // Empty dependency array ensures this effect runs once after initial render

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  const Delete = async (id) => {
    try {
      const response = await axios.get(`${url}/api/Albums/remove`,{id});
      if (response.data.success) {
          toast.success(response.data.message)
        fetchAlbums()
      } else {
        console.error('Failed to delete album:', response.data.message);
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.error('Error deleting album:', error);
      toast.error(error)
      
    }
  }

  return (
    <div className="space-y-6">
      {albums.map(album => (
        <div key={album._id} className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-4">
          <img src={album.image} alt={album.name} className="w-20 h-20 object-cover rounded-lg shadow-md" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{album.name}</h2>
            <p className="text-gray-700">{album.desc}</p>
            <p className="text-gray-700">{album.bgColor}</p>
          </div>
          <div className="flex space-x-2">
        
            <button onClick={()=>Delete()} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAlbum;
