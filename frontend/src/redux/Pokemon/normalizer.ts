import { PokemonType, PokemonMap } from './types';

export const normalize = (pokemons: PokemonType[]): PokemonMap =>
  pokemons.reduce(
    (pokemonMap: PokemonMap, pokemon) => ({
      ...pokemonMap,
      [pokemon.id]: pokemon,
    }),
    {},
  );
