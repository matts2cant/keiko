import * as React from 'react';

import Style from './Home.style';
import { makeGetRequest } from 'services/networking/request';
import loader from '../../loader.svg';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

interface RouteParams {
  page: string;
}
interface Props extends RouteComponentProps<RouteParams> {}
interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
}

const Home = (props: Props) => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const page = parseInt(props.match.params.page);

  React.useEffect(
    () => {
      const fetchPokemons = async () => {
        setLoading(true);
        try {
          const { body: recievedPokemons } = await makeGetRequest('/pokemon', { page });
          setPokemons(recievedPokemons);
        } catch (error) {
          setError(error.toString());
        }
        setLoading(false);
      };

      fetchPokemons();
    },
    [page],
  );

  return (
    <Style.Wrapper>
      {loading ? (
        <Style.Loader src={loader} alt="Loading..." />
      ) : error ? (
        <Style.Error>{error}</Style.Error>
      ) : (
        <React.Fragment>
          <Style.Title>Pokedex</Style.Title>
          <Style.PageLinkWrapper>
            {page > 1 && <Style.PageLink to={`/pokedex/${page - 1}`}>&lt;</Style.PageLink>}
            <Style.PageLink to={`/pokedex/${page + 1}`}>&gt;</Style.PageLink>
          </Style.PageLinkWrapper>
          <Style.PokemonsWrapper>
            {!!pokemons.length &&
              pokemons.map(({ name, id, height, weight }) => (
                <Style.Pokemon name={name} weight={weight} height={height} id={id} key={id} />
              ))}
          </Style.PokemonsWrapper>
        </React.Fragment>
      )}
    </Style.Wrapper>
  );
};

export default Home;
