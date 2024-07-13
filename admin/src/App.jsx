import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Addsong from "./pages/Addsong";
import Addalbum from "./pages/Addalubm";
import Listsong from "./pages/Listsong";
import ListAlbum from "./pages/ListAlbum";
import Sidebar from "./Components/sidebar";


const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer theme="colored" />
      <Sidebar />

      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<Addsong />} />
            <Route path="/add-album" element={<Addalbum />} />
            <Route path="/list-song" element={<Listsong />} />
            <Route path="/list-album" element={<ListAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
