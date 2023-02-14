const banner = require("./promoRd.png");

export const Banner = () => {
  return (
    <div className="mx-auto flex content-center justify-center">
      <div className="relative">
        <div className="max-w-5xl relative bg-steam-bg rounded-md">
          <img
            src={banner}
            alt="Promo"
            className="mx-auto rounded-md border-b-blue-600 border-b-2"
          />

          <div className="mx-auto w-50% backdrop-blur-sm flex-col content-center justify-center p-5 rounded-xl sm:top-5 ">
            <p className="font-medium">
              Estados Unidos, 1899. O fim da era do velho oeste começou, e as
              autoridades estão caçando as últimas gangues de fora da lei que
              restam. Os que não se rendem, nem sucumbem, são mortos.
            </p>
            <div className="mt-5 flex content-center justify-between">
              <button className="bg-blue-600 p-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
                COMPRAR AGORA
              </button>

              <p className="p-3 bg-green-600 rounded-lg font-bold">De R$199.00 por R$89.99</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
