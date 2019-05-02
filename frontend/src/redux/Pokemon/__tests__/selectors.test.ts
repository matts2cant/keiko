import { state } from '__fixtures__/state';
import { getPokemon, getPokemons } from '../selectors';

const pokemonState = {
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
  63: {
    id: 63,
    name: 'abra',
    height: 9,
    weight: 195,
  },
  64: {
    id: 64,
    name: 'kadabra',
    height: 13,
    weight: 565,
  },
  65: {
    id: 65,
    name: 'alakazam',
    height: 15,
    weight: 480,
  },
};
const initialState = { ...state, pokemon: pokemonState };

describe('Pokemon selectors', () => {
  describe('getPokemons function', () => {
    it('Should return the value stored in state.pokemon', () => {
      expect(getPokemons(initialState)).toEqual([
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
        {
          id: 64,
          name: 'kadabra',
          height: 13,
          weight: 565,
        },
        {
          id: 65,
          name: 'alakazam',
          height: 15,
          weight: 480,
        },
      ]);
    });
  });

  describe('getPokemon function', () => {
    it('Should return the value stored in state.pokemon.id', () => {
      expect(getPokemon(initialState, '65')).toEqual({
        id: 65,
        name: 'alakazam',
        height: 15,
        weight: 480,
      });
    });
  });
});
