import {PokemonStoreType, PokemonType} from "redux/Pokemon";

export function normalize(pokemons: PokemonType[]): PokemonStoreType {
  return pokemons.reduce((normalizedPokemonArray: object, pokemon: PokemonType) => {
    return {
      ...normalizedPokemonArray,
      [pokemon.id]: pokemon
    };
  }, {});
}
