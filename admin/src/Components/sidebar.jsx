import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="flex flex-col p-4">
        <h2 className="text-xl font-bold mb-4">Music App</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/add-song" className="hover:bg-gray-700 p-2 rounded block">
                Add Song
              </Link>
            </li>
            <li>
              <Link to="/add-album" className="hover:bg-gray-700 p-2 rounded block">
                Add Album
              </Link>
            </li>
            <li>
              <Link to="/list-song" className="hover:bg-gray-700 p-2 rounded block">
                List Songs
              </Link>
            </li>
            <li>
              <Link to="/list-album" className="hover:bg-gray-700 p-2 rounded block">
                List Albums
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
