import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { selectPokemonbyId } from "../RTK/selector"
import FlipCard from "../component/FlipCard"
import FavoriteButton from "../component/FavoriteButton"

export default function Detail() {
  const { pokemonId } = useParams()
  const pokemon = useSelector(selectPokemonbyId(Number(pokemonId)))
  return(
  <div className="bg-white flex flex-col justify-center items-center border border-[gray] py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
    <div className="text-[28px] mb-[10px]">
      {pokemon.name}
      <FavoriteButton pokemonId={Number(pokemonId)} />
    </div>
    <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
    <FlipCard front={pokemon.front} back={pokemon.back} />

    {/* <img className="w-[200px]" src={pokemon.front} />
    <img className="w-[200px]" src={pokemon.back} /> */}
  </div>
  )
}