import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  'pokemon/fetchMultiplePokemonById',
  async(maxPokemonId) => {
    const idArray = Array.from({length: maxPokemonId}, (_, i)=>i+1)

    const fetchPokeAPI = async (pokeId) => {
      const baseDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`)
      const baseData = await baseDataResponse.json()
      const detailDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${baseData.name}/`)
      const detailData = await detailDataResponse.json()

      const pokemonData = {
      id: pokeId,
      name: baseData.names.find(el => el.language.name === 'ko').name,
      description: baseData.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
      back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`,
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
      cry: detailData.cries.latest,

      }
        return pokemonData;
    }
//firstGen은 151 까지다.

    return await Promise.all(idArray.map((el) => fetchPokeAPI(el)));
    
  // 가져올 데이터 (한국어)
  // 포켓몬 이름
  // 포켓몬 이미지 -> 앞 뒤
  // 포켓몬 설명
  // 1세대 는 151마리
  }
)