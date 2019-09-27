import { AnyAction } from 'redux';
import {
  fetchPokemonRequested,
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
  fetchPokemonSuccess
} from "redux/Pokemon/actions";
import {ActionType, getType} from "typesafe-actions";
import {PokemonStoreType, PokemonType} from './types'

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess | typeof fetchPokemonSuccess | typeof fetchPokemonsRequested | typeof fetchPokemonRequested>;

export interface PokemonState {
  pokemons: PokemonStoreType;
  detailedPokemon?: PokemonType;
}

const initialState: PokemonState = {
  pokemons: {},
  detailedPokemon: undefined,
};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch(typedAction.type) {
    case getType(fetchPokemonsSuccess):
      return {
        ...state,
        pokemons: action.payload.pokemons,
      };
    case getType(fetchPokemonSuccess):
      return {
        ...state,
        detailedPokemon: action.payload.pokemon,
      };
    default:
      return state;
  }
};

export default reducer;
