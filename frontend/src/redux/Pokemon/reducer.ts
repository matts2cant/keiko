import { AnyAction } from 'redux';
import {fetchPokemonsSuccess} from "redux/Pokemon/actions";
import {ActionType, getType} from "typesafe-actions";
import {PokemonStoreType, PokemonType} from './types'

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess>;

export interface PokemonState {
  pokemons: PokemonStoreType;
}

const initialState: PokemonState = {
  pokemons: {}
};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch(action.type) {
    case getType(fetchPokemonsSuccess):
      return {
        ...state,
        pokemons: action.payload.pokemons,
      };
    default:
      return state;
  }
};

export default reducer;
