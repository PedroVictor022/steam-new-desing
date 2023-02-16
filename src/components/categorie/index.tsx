export const CategorieGame = ({src, alt, desc}: any) => {
  return (
    <div className="flex-col content-center m-0 justify-center gap-10 font-bold  rounded-md max-w-xs p-2 mt-10">
      <img src={src} alt={alt} className=""/>
      <p className="p-2 text-center">{desc}</p>
    </div>
  )
}