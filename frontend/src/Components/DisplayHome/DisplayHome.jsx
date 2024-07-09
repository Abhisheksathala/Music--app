import Navbar from "./../Navbar/Navbar";
import AllbumItem from "./../AllbumItem/AllbumItem";
import { albumsData } from "../../assets/assets";
import { songsData } from "../../assets/assets";
import SongItem from './../SongItem/SongItem';


const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-4 px-6">
        <h1 className="text-3xl font-bold mb-6">Featured Charts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {albumsData.map((item, index) => (
            <AllbumItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto my-4 px-6">
        <h1 className="text-3xl font-bold mb-6">Today Big Hits  </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
