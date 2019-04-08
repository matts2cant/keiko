import * as React from 'react';

import Style from './Pokemon.style';
import { makeGetRequest } from 'services/networking/request';
import loader from '../../loader.svg';
import { RouteComponentProps } from 'react-router';

interface RouteParams {
  id: string;
}

interface Props extends RouteComponentProps<RouteParams> {}

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
}

const pokeApiUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const Pokemon = (props: Props) => {
  const { id } = props.match.params;
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const { body: recievedPokemon } = await makeGetRequest(`/pokemon/${id}`);
        setPokemon(recievedPokemon);
      } catch (error) {
        setError(error.toString());
      }
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  return (
    <Style.Wrapper>
      {loading ? (
        <Style.Loader src={loader} alt="Loading..." />
      ) : error ? (
        <Style.Error>{error}</Style.Error>
      ) : (
        pokemon && (
          <React.Fragment>
            <Style.Title>{pokemon.name}</Style.Title>
            <Style.PokemonWrapper>
              <div>
                <img src={`${pokeApiUrl}/${id}.png`} />
                <img src={`${pokeApiUrl}/back/${id}.png`} />
              </div>
              <div>
                <img src={`${pokeApiUrl}/shiny/${id}.png`} />
                <img src={`${pokeApiUrl}/back/shiny/${id}.png`} />
              </div>
              <div>
                <Style.Attribute>Height: {pokemon.height}</Style.Attribute>
                <Style.Attribute>Weight: {pokemon.weight}</Style.Attribute>
                <Style.Attribute>Id: {id}</Style.Attribute>
              </div>
            </Style.PokemonWrapper>
          </React.Fragment>
        )
      )}
    </Style.Wrapper>
  );
};

export default Pokemon;
