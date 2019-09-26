import { state } from '__fixtures__/state';
import { getDetailedPokemon, getPokemons } from '../selectors';

const token = 'OX1dSSVRFX1BPU1QsQ0FOX1JFQURfTkV';
const loginError = 'User not logged in';

const initialState = { ...state, login: { token, loginError } };

const detailedPokemon = initialState.pokemon.detailedPokemon;
const pokemons = initialState.pokemon.pokemons;

describe('Login selectors', () => {
  describe('getDetailedPokemon function', () => {
    it('Should return the value stored in store.login.token', () => {
      expect(getDetailedPokemon(initialState)).toBe(detailedPokemon);
    });
  });
  describe('getPokemons function', () => {
    it('Should return the value stored in store.login.loginError', () => {
      expect(getPokemons(initialState)).toBe(pokemons);
    });
  });
});
