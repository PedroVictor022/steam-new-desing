const banner = require("./promoRd.png");

export const Banner = () => {
  return (
    <div className="mx-auto flex content-center justify-center mb-5">
      <div className="relative">
        <div className="max-w-5xl relative bg-steam-bg rounded-md">
          <img
            src={banner}
            alt="Promo"
            className="mx-auto rounded-md border-b-blue-600 border-b-2"
          />

          <div className="mx-auto w-50% backdrop-blur-sm flex-col content-center justify-center p-5 rounded-xl sm:top-5 ">

            <div className="flex content-center justify-center gap-10 -mt-6 mb-6 text-4xl font-extrabold">
              <div>_</div>
              <div className="text-blue-600">_</div>
              <div>_</div>
              <div>_</div>
            </div>

            <p className="font-medium">
              United States, 1899. The end of the Wild West era has begun, and how
              the authorities are hunting down the last outlaw gangs that
              left. Those who do not surrender or succumb are killed.
            </p>
            <div className="mt-5 flex content-center justify-between">
              <button className="bg-blue-600 p-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
                BUY NOW
              </button>

              <p className="p-3 border-b-2 border-b-green-500  font-bold">R$199.00 - R$89.99</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
