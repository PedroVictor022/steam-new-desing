import motion from "framer-motion";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const logo = require("./steamLogo.png");
const myPhoto = require("./myPhoto.jpg");
const menuLogo = require("./menu.png");

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <div
      className="flex justify-between p-5 text-white font-medium"
      style={{ backgroundColor: "#1B2838" }}
    >
      {/*TODO: IMPLEMENT MENU */}

      <div className="flex gap-5 content-center justify-center ml-2">
        <img src={logo} alt="Steam Logo" />
        <div className="hidden sm:flex gap-5 mt-2.5">
          <div className="border-b-2 border-blue-500">
            <p className="text-blue-500 font-bold">STORE</p>
          </div>
          <div>
            <p>COMMUNITY</p>
          </div>
          <div>
            <p>CHAT</p>
          </div>
          <div>
            <p>SUPORT</p>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex mr-2 content-center justify-center gap-3">
        <div className="hidden sm:flex gap-5 mt-2.5">
          <p>Borges</p>
        </div>
        <img src={myPhoto} alt="Profile photo" className="rounded-lg" />
      </div>

      <div
        className="mt-2 cursor-pointer sm:hidden"
        onClick={() => handleMenu()}
      >
        {/* <img 
          src={menuLogo} 
          alt="Profile photo" 
          className="mt-3.5"
          onClick={() => handleMenu()}
        /> */}
        {menu ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {menu ? <div className="sm:px-4 py-2.5 rounded dark:bg-gray-900">oi</div> : null}
    </div>
  );
};
