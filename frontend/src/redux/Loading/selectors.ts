import { RootState } from 'redux/types';

export const isPokemonLoading = (store: RootState) => store.loading['Pokemon/FETCH_POKEMON_REQUESTED'] || false;
export const arePokemonsLoading = (store: RootState) => store.loading['Pokemon/FETCH_POKEMONS_REQUESTED'] || false;
