import * as React from 'react';

import Style from './Home.style';
import { makeGetRequest } from 'services/networking/request';

interface Props {}
interface State {
  pokemons: {
    id: number;
    name: string;
    weight: number;
    height: number;
  }[];
}

class Home extends React.Component<Props, State> {
  state: State = {
    pokemons: [],
  };

  componentDidMount() {
    makeGetRequest('/pokemon').then(({ body: pokemons }) => this.setState({ pokemons }));
  }

  render() {
    const { pokemons } = this.state;
    if (!pokemons.length) return null;

    return (
      <Style.Wrapper>
        <Style.Title>Pokedex</Style.Title>
        <Style.PokemonsWrapper>
          {pokemons.map(({ name, id, height, weight }) => (
            <Style.Pokemon name={name} weight={weight} height={height} id={id} key={id} />
          ))}
        </Style.PokemonsWrapper>
      </Style.Wrapper>
    );
  }
}

export default Home;
