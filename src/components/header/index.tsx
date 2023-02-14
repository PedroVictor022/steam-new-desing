import motion from "framer-motion";

const logo = require("./steamLogo.png");
const myPhoto = require("./myPhoto.jpg");

export const Header = () => {
  return (
    <div
      className="flex justify-between p-5 text-white font-medium"
      style={{ backgroundColor: "#1B2838" }}
    >
      {/*TODO: IMPLEMENT MENU */}

      <div className="flex gap-5 content-center justify-center ml-2">
        <img 
          src={logo} 
          alt="Steam Logo"
        />
        <div className="hidden md:flex gap-5 mt-2.5">
          <p className="text-blue-600">STORE</p>
          <p>COMMUNITY</p>
          <p>CHAT</p>
          <p>SUPORT</p>
        </div>
      </div>
      <div className="mr-2 flex content-center justify-center gap-3">
        <div className="hidden md:flex gap-5 mt-2.5">
          <p>Borges</p>
        </div>
        <img src={myPhoto} alt="Profile photo" className="rounded-lg" />
      </div>
    </div>
  );
};
