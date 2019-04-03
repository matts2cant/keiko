import * as React from 'react';

import Style from './Home.style';
import { makeGetRequest } from 'services/networking/request';
import loader from '../../loader.svg';

interface Props {}
interface State {
  pokemons: {
    id: number;
    name: string;
    weight: number;
    height: number;
  }[];
  loading: boolean;
}

class Home extends React.Component<Props, State> {
  state: State = {
    pokemons: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    makeGetRequest('/pokemon').then(({ body: pokemons }) =>
      this.setState({ pokemons, loading: false }),
    );
  }

  render() {
    const { pokemons, loading } = this.state;

    return (
      <Style.Wrapper>
        <Style.Title>Pokedex</Style.Title>
        {loading ? (
          <Style.Loader src={loader} alt="Loading..." />
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
  }
}

export default Home;
