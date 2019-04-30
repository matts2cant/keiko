import { PokemonMap } from 'redux/Pokemon/types';

export const actionsTypes = {
  fetchPokemonsSuccess: 'Pokemon/FETCH_POKEMONS_SUCCESS',
};

export const fetchPokemonsSuccess = (pokemons: PokemonMap) => ({
  type: actionsTypes.fetchPokemonsSuccess,
  pokemons,
});

export default {
  fetchPokemonsSuccess,
};
