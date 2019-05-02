import { fetchPokemonsSuccess, fetchPokemonSuccess } from '../actions';
import reducer from '../reducer';

const initialState = {
  61: {
    id: 61,
    name: 'poliwhirl',
    height: 10,
    weight: 200,
  },
  62: {
    id: 62,
    name: 'poliwrath',
    height: 13,
    weight: 540,
  },
};

describe('Pokemon reducer', () => {
  describe('FETCH_POKEMONS_SUCCESS case', () => {
    it('Should return an initial state with pokemons', () => {
      const pokemons = {
        '62': {
          id: 62,
          name: 'poliwrath',
          height: 13,
          weight: 540,
        },
        '63': {
          id: 63,
          name: 'abra',
          height: 9,
          weight: 195,
        },
      };
      const action = fetchPokemonsSuccess(pokemons);
      const expectedState = { ...initialState, ...pokemons };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('FETCH_POKEMON_SUCCESS case', () => {
    it('Should return an initial state with an error in the loginError field', () => {
      const pokemon = {
        id: 63,
        name: 'abra',
        height: 9,
        weight: 195,
      };
      const action = fetchPokemonSuccess(pokemon);
      const expectedState = { ...initialState, [pokemon.id]: pokemon };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
