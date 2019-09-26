import { createStandardAction } from 'typesafe-actions';
import { PokemonType } from './types'

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<{
  pokemons: PokemonType[];
}>();

export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<{
  pokemon: PokemonType;
}>();

export default {
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
};
