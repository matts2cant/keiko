import { PokemonMap, PokemonType } from 'redux/Pokemon/types';

export const actionsTypes = {
  fetchPokemonsRequested: 'Pokemon/FETCH_POKEMONS_REQUESTED',
  fetchPokemonRequested: 'Pokemon/FETCH_POKEMON_REQUESTED',
  fetchPokemonsSuccess: 'Pokemon/FETCH_POKEMONS_SUCCESS',
  fetchPokemonSuccess: 'Pokemon/FETCH_POKEMON_SUCCESS',
};

export interface fetchPokemonsRequestedType {
  type: 'Pokemon/FETCH_POKEMONS_REQUESTED';
  page: string;
}

export const fetchPokemonsRequested = (page: string) => ({
  type: actionsTypes.fetchPokemonsRequested,
  page,
});

export interface fetchPokemonRequestedType {
  type: 'Pokemon/FETCH_POKEMON_REQUESTED';
  id: string;
}

export const fetchPokemonRequested = (id: string) => ({
  type: actionsTypes.fetchPokemonRequested,
  id,
});

export const fetchPokemonsSuccess = (pokemons: PokemonMap) => ({
  type: actionsTypes.fetchPokemonsSuccess,
  pokemons,
});

export const fetchPokemonSuccess = (pokemon: PokemonType) => ({
  type: actionsTypes.fetchPokemonSuccess,
  pokemon,
});

export default {
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
};
