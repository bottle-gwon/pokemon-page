import { useNavigate } from "react-router"
import FavoriteButton from "./FavoriteButton"
import { memo, useState } from "react"

const cardStyle = 
`bg-white w-[150px] border border-solid
 border-gray-700 flex flex-col justify-center 
 items-center gap-[10px] pb-[10px] rounded-xl
 hover:scale-[1.1] duration-[0.15s]
 hover:drop-shadow-xl hover:drop-shadow-[rgba(0,0,0,0.5)]
 border-b-[5px] border-r-[5px]
`

export const Card = memo(({pokemon}) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const navigate = useNavigate()
  return (
  <section onClick={() => navigate(`/detail/${pokemon.id}`)}
  className={cardStyle}>
    {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">로딩중...</div> : null}
    <img onLoad={()=>setIsImageLoading(false)} src={pokemon.front} alt="front_img" className={`${isImageLoading ? 'none' : 'block'} w-[120px]`}/>
    <div>
      {pokemon.name}
      <FavoriteButton pokemonId={pokemon.id} />
    </div>
  </section>
  )
})