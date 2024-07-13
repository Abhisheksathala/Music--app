import { assets } from './../assets/admin-assets/assets';

const Addsong = () => {
  return (
    <div className="p-4 lg:p-12 bg-white shadow-md rounded-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Song</h1>
      <form action="" className="space-y-6">
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium mb-2">Upload Song</p>
          <input type="file" id="song" name="song" accept="audio/*" hidden />
          <label htmlFor="song" className="cursor-pointer">
            <img src={assets.upload_song} alt="Upload Song" className="w-16 h-16 object-cover" />
          </label>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium mb-2">Upload Image</p>
          <input type="file" id="image" name="image" accept="image/*" hidden />
          <label htmlFor="image" className="cursor-pointer">
            <img src={assets.upload_area} alt="Upload Image" className="w-16 h-16 object-cover" />
          </label>
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Song Name</p>
          <input
            type="text"
            name="songName"
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
            id="Desc"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Album</p>
          <select
            name="album"
            id="album"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="none">None</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Addsong;
