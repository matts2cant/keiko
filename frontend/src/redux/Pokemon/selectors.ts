import { RootState } from 'redux/types';

export const getDetailedPokemon = (store: RootState) => store.pokemon.detailedPokemon;
export const getPokemons = (store: RootState) => store.pokemon.pokemons;
