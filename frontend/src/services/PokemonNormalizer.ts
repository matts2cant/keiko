import {PokemonStoreType, PokemonType} from "redux/Pokemon";

export function normalize(pokemons: PokemonType[]): PokemonStoreType {
  return pokemons.reduce((acc: object, pokemon: PokemonType) => {
    return {
      ...acc,
      [pokemon.id]: pokemon
    };
  }, {});
}
