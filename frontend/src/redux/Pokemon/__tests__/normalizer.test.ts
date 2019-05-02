import { normalize } from '../normalizer';

describe('Pokemon normalizer', () => {
  it('Should normalize the pokemon', () => {
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

    const normalizedPokemons = {
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
    };

    expect(normalize(pokemons)).toEqual(normalizedPokemons);
  });
});
