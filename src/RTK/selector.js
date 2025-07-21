import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonbyId = (pokemonId) => createSelector(
  state => state.pokemon.data,
  (pokemon) => 
    pokemon.find(el => el.id === pokemonId)
  
)