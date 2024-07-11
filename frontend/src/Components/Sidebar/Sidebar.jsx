import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";


const Sidebar = () => {


  const   naviget =   useNavigate();

  return (
    <div className="w-1/4 h-full p-2 flex flex-col gap-2 text-white  lg:flex bg-[#121212]">
      <div className="flex flex-col justify-around gap-2 p-4 bg-[#121212] rounded">
        <div onClick={()=>{naviget('/')}} className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-[#1a1a1a] p-2 rounded">
          <img src={assets.home_icon} alt="Home icon" className="w-6 h-6" />
          <p>Home</p>
        </div>
        <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-[#1a1a1a] p-2 rounded">
          <img src={assets.search_icon} alt="Search icon" className="w-6 h-6" />
          <p>Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-full p-4 rounded">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-[#1a1a1a] p-2 rounded">
            <img src={assets.stack_icon} alt="Library icon" className="w-6 h-6" />
            <p>Your Library</p>
          </div>
          <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-[#1a1a1a] p-2 rounded">
            <img src={assets.arrow_icon} alt="Arrow icon" className="w-5 h-5" />
            <img src={assets.plus_icon} alt="Plus icon" className="w-5 h-5 ml-2" />
            <p>Create Playlist</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="p-4 bg-[#242424] rounded mb-4">
            <h1 className="text-lg font-semibold">Create your first playlist</h1>
            <p className="text-sm">Its easy, we will help you.</p>
            <button className="px-4 py-2 bg-white text-black text-sm rounded-full mt-4">Create Playlist</button>
          </div>

          <div className="p-4 bg-[#242424] rounded">
            <h1 className="text-lg font-semibold">Podcasts to follow</h1>
            <p className="text-sm">Well keep you updated on new episodes.</p>
            <button className="px-4 py-2 bg-white text-black text-sm rounded-full mt-4">Follow Podcasts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
