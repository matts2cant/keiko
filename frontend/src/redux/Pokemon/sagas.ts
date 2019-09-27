import {takeEvery} from 'redux-saga/effects';
import {all, call, put} from 'redux-saga/effects'
import {setLoading} from "redux/Loading";
import {LoadingAction} from "redux/Loading/reducer";
import {fetchPokemonsSuccess, fetchPokemonSuccess} from "redux/Pokemon/actions";
import {PokemonAction} from "redux/Pokemon/reducer";
import {makeGetRequest} from "services/networking/request";
import {normalize} from "services/PokemonNormalizer";

function* fetchPokemons(action: any) {
  try {
    yield put<LoadingAction>(setLoading({
      key: 'Pokemon/FETCH_POKEMONS_REQUESTED',
      value: true,
    }));
    const response = yield call(makeGetRequest, '/pokemon', { page: action.payload.page });
    yield put<PokemonAction>(fetchPokemonsSuccess({
      pokemons: normalize(response.body),
    }));
  } finally {
    yield put<LoadingAction>(setLoading({
      key: 'Pokemon/FETCH_POKEMONS_REQUESTED',
      value: false,
    }));
  }
}

function* fetchPokemon(action: any) {
  try {
    yield put<LoadingAction>(setLoading({
      key: 'Pokemon/FETCH_POKEMON_REQUESTED',
      value: true,
    }));
    const response = yield call(makeGetRequest, '/pokemon/' + action.payload.id);
    yield put<PokemonAction>(fetchPokemonSuccess({
      pokemon: response.body,
    }));
  } finally {
    yield put<LoadingAction>(setLoading({
      key: 'Pokemon/FETCH_POKEMON_REQUESTED',
      value: false,
    }));
  }
}

export default function* pokemonSaga() {
  yield all([
    takeEvery('Pokemon/FETCH_POKEMONS_REQUESTED', fetchPokemons),
    takeEvery('Pokemon/FETCH_POKEMON_REQUESTED', fetchPokemon)
  ]);
}
