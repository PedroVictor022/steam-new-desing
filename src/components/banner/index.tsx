const banner = require("./promoRd.png");

export const Banner = () => {
  return (
    <div className="bg-scroll" style={{ backgroundImage: `url(${banner})`}}>
      <img 
        src={banner}
        alt="Promo" 
        className="cover-full z-0 relative"
      />

      <p className="fixed top-25">Ola mundo</p>

    </div>
  )
}