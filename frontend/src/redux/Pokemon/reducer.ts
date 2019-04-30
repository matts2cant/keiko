import { AnyAction } from 'redux';
import { PokemonMap } from 'redux/Pokemon/types';
import { actionsTypes } from './actions';

export type PokemonState = Readonly<PokemonMap>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTypes.fetchPokemonsSuccess:
      return {
        ...state,
        ...action.pokemons,
      };
    default:
      return state;
  }
};

export default reducer;
