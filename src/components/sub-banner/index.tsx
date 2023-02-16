import { CategorieGame } from "../categorie";

const Fifa = require("./Fifa.png");
const Farcry = require("./Farcry.png");
const Forza = require("./Forza.png");
const Mine = require("./Minecraft.png");

export const SubBanner = () => {
  return (
    <div className="mx-auto h-auto flex-col content-center justify-center mt-10  ">
      <div className="w-fit mx-auto hidden md:flex content-center justify-center gap-9 p-4 bg-steam-bg font-bold rounded-lg">
        <p>OFFERS</p>
        <p>POINT SHOP</p>
        <p className="border-b-2 border-blue-600 text-blue-500">CATEGORIES</p>
        <p>NEWS</p>
        <p>LAB</p>
      </div>

      

      <div className="h-full pb-10">
        <div
          className="flex-col content-center mx-auto w-fit pb-5 justify-center sm:grid grid-cols-4"
        >
         <CategorieGame src={Fifa} alt="sports" desc="SPORTS" />
         <CategorieGame src={Farcry} alt="fps" desc="FPS"/>
         <CategorieGame src={Forza} alt="race" desc="RACE"/>
         <CategorieGame src={Mine} alt="rpg" desc="RPG"/>
        </div>
      </div>
    </div>
  );
};
