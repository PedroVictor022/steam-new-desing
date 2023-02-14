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

  console.log(`Agora ${menu}`);

  return (
    <>
      <nav className="sm:px-4 py-2" style={{ backgroundColor: "#1B2838" }}>
        <div className="container flex flex-wrap items-center justify-between mx-auto text-white p-5">
          <div className="flex gap-5 content-center justify-center ml-2 ">
            <img src={logo} alt="Steam Logo" />
            <div className="hidden sm:flex gap-5 mt-1.5">
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
            <div className="hidden sm:flex gap-5 mt-1.5">
              <p>Borges</p>
            </div>
            <img src={myPhoto} alt="Profile photo" className="rounded-lg" />
          </div>
          <div
            className="mr-2 cursor-pointer p-1 sm:hidden"
            onClick={() => handleMenu()}
          >
            {menu ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
        <div>
          {menu ? (
            <div className="w-full block w-auto sm:hidden">

              <div
                className="w-full p-3 border-t-2 mt-5 border-white text-blue-500 font-semibold"
              >
                 <img src={myPhoto} alt="Profile photo" className="rounded-lg mt-2" />
                 <p className="mt-2">Borges</p>
                 <p className="mt-2">R$ 480.00</p>
                 <p className="mt-2">Carrinho: 4</p>
              </div>

              <ul className="flex flex-col p-4 mt-1 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <p
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    STORE
                  </p>
                </li>
                <li>
                  <p
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    COMMUNITY
                  </p>
                </li>
                <li>
                  <p
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    CHAT
                  </p>
                </li>
                <li>
                  <p
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    SUPORT
                  </p>
                </li>
                
              </ul>
            </div>
          ) : (
            <div className="hidden">Ola tudo bem</div>
          )}
        </div>
      </nav>
    </>
  );
};
