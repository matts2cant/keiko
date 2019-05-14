import { call, put, takeEvery } from 'redux-saga/effects';
import { actionsTypes, fetchPokemonsRequestedType, fetchPokemonsSuccess } from './actions';
import { makeGetRequest } from 'services/networking/request';
import { normalize } from './normalizer';

export function* fetchPokemons({ page }: fetchPokemonsRequestedType) {
  const { body: pokemons } = yield call(makeGetRequest, '/pokemon', { page: page });
  const normalizedPokemons = normalize(pokemons);
  yield put(fetchPokemonsSuccess(normalizedPokemons));
}

export default function* pokemonSagas() {
  yield takeEvery(actionsTypes.fetchPokemonsRequested, fetchPokemons);
}
