import * as React from 'react';

import Pokemon from 'components/Pokemon';
import Style from './Home.style';
import { makeGetRequest } from 'services/networking/request';

interface Props {}
interface State {
  pokemons: {
    id: number;
    name: string;
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
    const [pokemon] = this.state.pokemons;

    return (
      <Style.Intro>
        <Pokemon name={pokemon.name} id={pokemon.id} />
        <Pokemon name="Carapuce" id={7} />
        <Pokemon name="Carabaffe" id={8} />
        <Pokemon name="Tortank" id={9} />
      </Style.Intro>
    );
  }
}

export default Home;
