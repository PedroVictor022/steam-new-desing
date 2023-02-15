export const CategorieGame = ({src, alt, desc}: any) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <p>{desc}</p>
    </div>
  )
}