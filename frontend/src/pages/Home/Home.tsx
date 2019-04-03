import * as React from 'react';

import Pokemon from 'components/Pokemon';
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
      <Style.Intro>
        {pokemons.map(({ name, id, height, weight }) => (
          <Pokemon name={name} weight={weight} height={height} id={id} key={id} />
        ))}
      </Style.Intro>
    );
  }
}

export default Home;
