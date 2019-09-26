import { takeEvery } from 'redux-saga/effects';
import {all, call, put} from 'redux-saga/effects'
import {fetchPokemonsSuccess, fetchPokemonSuccess} from "redux/Pokemon/actions";
import {PokemonAction} from "redux/Pokemon/reducer";
import {makeGetRequest} from "services/networking/request";
import {normalize} from "services/PokemonNormalizer";

function* fetchPokemons(action: any) {
  const response = yield call(makeGetRequest, '/pokemon', { page: action.payload.page });
  yield put<PokemonAction>(fetchPokemonsSuccess({
    pokemons: normalize(response.body),
  }));
}

function* fetchPokemon(action: any) {
  const response = yield call(makeGetRequest, '/pokemon/' + action.payload.id);
  yield put<PokemonAction>(fetchPokemonSuccess({
    pokemon: response.body,
  }));
}

export default function* pokemonSaga() {
  yield all([
    takeEvery('Pokemon/FETCH_POKEMONS_REQUESTED', fetchPokemons),
    takeEvery('Pokemon/FETCH_POKEMON_REQUESTED', fetchPokemon)
  ]);
}
