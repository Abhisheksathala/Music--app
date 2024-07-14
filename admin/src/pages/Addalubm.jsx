import  { useState } from "react";
import { assets } from "../assets/admin-assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Addalbum = () => {
  const url = "http://localhost:4000";

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("#000000");
  const [loading, setLoading] = useState(false);



  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("bgColor", color);
      formData.append("image", image);

      const response = await axios.post(`${url}/api/Albums/add`, formData);

      if (response.data.success) {
        toast.success(response.data.message);
        setImage(null);
        setName("");
        setDesc("");
        setColor("#000000");
        console.log(response.data)
      } else {
        toast.error("Failed to add song: " + response.data.message);
      }
    } catch (error) {
      toast.error("Failed to add song: Network Error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={onSubmitHandler} className="space-y-4">
        <div className="flex items-center space-x-4">
          <p className="text-lg font-medium">Upload Image</p>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            name="image"
            id="image"
            accept="image/*"
            className="hidden"
          />
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Image"
              className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200 hover:border-blue-500 transition duration-300"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Album Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Enter album name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="desc"
            className="block text-sm font-medium text-gray-700"
          >
            Album Description
          </label>
          <input
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
            type="text"
            name="desc"
            id="desc"
            placeholder="Enter album description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="color"
            className="block text-sm font-medium text-gray-700"
          >
            Background Color
          </label>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            value={color}
            type="color"
            name="color"
            id="color"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Addalbum;
