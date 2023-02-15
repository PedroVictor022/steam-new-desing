import { CategorieGame } from "../categorie";

const Fifa = require("./Fifa.png");
const Farcry = require("./Farcry.png");
const Forza = require("./Forza.png");
const Mine = require("./Minecraft.png");

export const SubBanner = () => {
  return (
    <div
      className="mx-auto h-auto flex-col content-center justify-center mt-10"
      style={{
        width: "850px",
        minWidth: "auto",
      }}
    >
      <div className="w-full hidden md:flex content-center justify-center gap-9 p-4 bg-steam-bg font-bold rounded-lg">
        <p>OFFERS</p>
        <p>POINT SHOP</p>
        <p className="border-b-2 border-blue-600 text-blue-500">CATEGORIES</p>
        <p>NEWS</p>
        <p>LAB</p>
      </div>

      <div className="mt-10">
        <p className="p-2 bg-blue-600 w-fit rounded-md font-bold">WITH MORE PLAYERS</p>
        <div className="grid grid-cols-4 gap-9 bg-steam-home relative mt-7">
          <div>
            <CategorieGame src={Fifa} alt="logo" desc="Sports"/>
          </div>
          <div>
            <CategorieGame src={Farcry} alt="logo" desc="FPS" />
          </div>
          <div>
            <CategorieGame src={Forza} alt="logo" desc="Racing" />
          </div>
          <div>
            <CategorieGame src={Mine} alt="logo" desc="RPG" />
          </div>
        </div>
      </div>
    </div>
  );
};
