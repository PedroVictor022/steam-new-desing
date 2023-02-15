export const CategorieGame = ({src, alt, desc}: any) => {
  return (
    <div className="flex-col content-center justify-center gap-10 font-bold bg-steam-bg rounded-md hover:bg-slate-700">
      <img src={src} alt={alt} />
      <p className="p-2 text-center">{desc}</p>
    </div>
  )
}