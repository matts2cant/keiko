import * as React from 'react';

import Style from './Home.style';
import { makeGetRequest } from 'services/networking/request';
import loader from '../../loader.svg';

interface Props {}
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

  React.useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const { body: recievedPokemons } = await makeGetRequest('/pokemon');
        setPokemons(recievedPokemons);
      } catch (error) {
        setError(error.toString());
      }
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  return (
    <Style.Wrapper>
      <Style.Title>Pokedex</Style.Title>
      {loading ? (
        <Style.Loader src={loader} alt="Loading..." />
      ) : error ? (
        <Style.Error>{error}</Style.Error>
      ) : (
        <Style.PokemonsWrapper>
          {pokemons.length &&
            pokemons.map(({ name, id, height, weight }) => (
              <Style.Pokemon name={name} weight={weight} height={height} id={id} key={id} />
            ))}
        </Style.PokemonsWrapper>
      )}
    </Style.Wrapper>
  );
};

export default Home;
