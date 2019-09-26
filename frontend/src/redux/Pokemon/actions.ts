import { createStandardAction } from 'typesafe-actions';
import {PokemonStoreType, PokemonType} from './types'

export const fetchPokemonsRequested = createStandardAction('Pokemon/FETCH_POKEMONS_REQUESTED')<{
  page: number;
}>();

export const fetchPokemonRequested = createStandardAction('Pokemon/FETCH_POKEMON_REQUESTED')<{
  id: number;
}>();

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<{
  pokemons: PokemonStoreType;
}>();

export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<{
  pokemon: PokemonType;
}>();

export default {
  fetchPokemonsRequested,
  fetchPokemonRequested,
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
};
