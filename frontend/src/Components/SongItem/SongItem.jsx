
const SongItem = ({ name, image, desc, id }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
        <p className="text-sm text-gray-300 mb-3">{desc}</p>
        <p className="text-xs text-gray-400">ID: {id}</p>
        {/* <div className="flex justify-between items-center mt-3">
          <button className="text-xs text-gray-500 hover:text-white focus:outline-none">Play</button>
          <svg className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default SongItem;
