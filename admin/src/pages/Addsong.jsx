import { useEffect, useState } from 'react';
import { assets } from './../assets/admin-assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addsong = () => {
  const url = "http://localhost:4000";

  const [image, setImage] = useState(null);
  const [song, setSong] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState('none');
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);
 
  console.log('my alb:'+ albumData)


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('album', album);
    formData.append('image', image);
    formData.append('audio', song);

    try {
      const res = await axios.post(`${url}/api/songs/addsong`, formData);

      if (res.data.success) {
        toast.success(res.data.message);
        setSong(null);
        setImage(null);
        setName("");
        setDesc("");
        setAlbum("none");
      } else {
        toast.error('Failed to add song: ' + res.data.message);
      }
    } catch (error) {
      toast.error('Failed to add song: Network Error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 
  const loadAlnumData = async ()=>{
    try {
      const resp = await axios.get(`${url}/api/Albums/list`);
      if(resp.data.success){
        setAlbumData(resp.data.data);
      }
      else{
        toast.error('Failed to load albums:'+ resp.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    loadAlnumData()
  },[])

  return (
    <div className="p-4 lg:p-12 bg-white shadow-md rounded-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Song</h1>
      <form onSubmit={onSubmitHandler} className="space-y-6">
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium mb-2">Upload Song</p>
          <input onChange={(e) => setSong(e.target.files[0])} type="file" id="song" name="song" accept="audio/*" hidden />
          <label htmlFor="song" className="cursor-pointer">
            <img src={song ? assets.upload_added : assets.upload_song} alt="Upload Song" className="w-16 h-16 object-cover" />
          </label>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium mb-2">Upload Image</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" name="image" accept="image/*" hidden />
          <label htmlFor="image" className="cursor-pointer">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload Image" className="w-16 h-16 object-cover" />
          </label>
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Song Name</p>
          <input
            type="text"
            name="songName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            id="songName"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Song Description</p>
          <input
            type="text"
            required
            name="Desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="Desc"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Album</p>
          <select
            name="album"
            id="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="none">None</option>
            {albumData.map((album,index) => (
              <option key={index} value={album.name}>{album.name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          {loading ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default Addsong;
