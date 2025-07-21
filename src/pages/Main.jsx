import { useSelector } from "react-redux"
import styled from "styled-components"

export default function Main() {
  const pokemonData = useSelector(state => state.pokemon)
    
  return(
  <div>
    {pokemonData.data.map(el => (
      <section>
        <img src={el.front} alt="front_img" />
        <div>{el.name}</div>
      </section>
    ))}
  </div>)
}

const CardContainer = styled.section`

`
