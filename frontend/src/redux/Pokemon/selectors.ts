import { PokemonType } from 'redux/Pokemon/types';
import { RootState } from 'redux/types';

export const getPokemons = (state: RootState): PokemonType[] => Object.values(state.pokemon);
export const getPokemon = (state: RootState, pokemonId: string): PokemonType =>
  state.pokemon[pokemonId];
