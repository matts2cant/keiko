import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { makeGetRequest } from 'services/networking/request';

import {
  fetchPokemonsRequested,
  fetchPokemonsSuccess,
  fetchPokemonRequested,
  fetchPokemonSuccess,
} from '../actions';
import { fetchPokemons, fetchPokemon } from '../sagas';
import { normalize } from '../normalizer';

describe('[Saga] Pokemon redux', () => {
  describe('fetchPokemons', () => {
    const fetchPokemonsRequestedAction = fetchPokemonsRequested('2');

    const pokemons = [
      {
        id: 61,
        name: 'poliwhirl',
        height: 10,
        weight: 200,
      },
      {
        id: 62,
        name: 'poliwrath',
        height: 13,
        weight: 540,
      },
      {
        id: 63,
        name: 'abra',
        height: 9,
        weight: 195,
      },
    ];

    it('should call the success action when request is a success', async () => {
      await expectSaga(fetchPokemons, fetchPokemonsRequestedAction)
        .provide([[matchers.call.fn(makeGetRequest), { body: pokemons }]])
        .put(fetchPokemonsSuccess(normalize(pokemons)))
        .run();
    });
  });

  describe('fetchPokemon', () => {
    const fetchPokemonRequestedAction = fetchPokemonRequested('2');
    const pokemon = {
      id: 61,
      name: 'poliwhirl',
      height: 10,
      weight: 200,
    };
    it('should call the success action when request is a success', async () => {
      await expectSaga(fetchPokemon, fetchPokemonRequestedAction)
        .provide([[matchers.call.fn(makeGetRequest), { body: pokemon }]])
        .put(fetchPokemonSuccess(pokemon))
        .run();
    });
  });
});
