import { PokemonMap, PokemonType } from 'redux/Pokemon/types';

export const actionsTypes = {
  fetchPokemonsSuccess: 'Pokemon/FETCH_POKEMONS_SUCCESS',
  fetchPokemonSuccess: 'Pokemon/FETCH_POKEMON_SUCCESS',
};

export const fetchPokemonsSuccess = (pokemons: PokemonMap) => ({
  type: actionsTypes.fetchPokemonsSuccess,
  pokemons,
});

export const fetchPokemonSuccess = (pokemon: PokemonType) => ({
  type: actionsTypes.fetchPokemonSuccess,
  pokemon,
});

export default {
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
};
