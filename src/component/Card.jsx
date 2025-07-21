import { useNavigate } from "react-router"

export const Card = ({pokemon}) => {
  const navigate = useNavigate()
  return (
  <section onClick={() => navigate(`/detail/${pokemon.id}`)}
  className="w-[150px] border border-solid border-gray-700 flex flex-col justify-center items-center gap-[10px] pb-[10px] rounded-xl">
    <img src={pokemon.front} alt="front_img" className="w-[120px]"/>
    <div>{pokemon.name}</div>
  </section>
  )
}