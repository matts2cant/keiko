import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {FormattedMessage} from 'react-intl';
import {makeGetRequest} from "services/networking/request";
import Style from './Home.style';

interface State {
  loading: boolean;
  error: boolean;
  pokemons: Array<{
    id: number;
    name: string;
    height: number;
    weight: number;
  }>;
}

class Home extends React.Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {loading: true, error: false, pokemons: []};
  }

  componentDidMount(): void {
    makeGetRequest("/pokemon")
      .then((response) => {
        this.setState({
          loading: false,
          error: false,
          pokemons: response.body,
        })
      }).catch((error) => {
      this.setState({
        loading: false,
        error: true,
        pokemons: [],
      })
      });
  }

  render(): React.ReactNode {
    const pokemonComponents = this.state.pokemons.map(
      (data: { id: number; name: string; height: number; weight: number; }) =>
        <Pokemon key={data.id.toString()} id={data.id} name={data.name} height={data.height} weight={data.weight} />
    )

    const loader = <img src={"loader.svg"} alt={"loader"}/>;

    return (
      <Style.Intro>
        <Style.Title><FormattedMessage id="pokemon.pokedex" /></Style.Title>
        <Style.Container>
          {this.state.loading && loader}
          {!this.state.loading && pokemonComponents}
          {this.state.error && <Style.Error><FormattedMessage id="pokemon.error" /></Style.Error>}
        </Style.Container>
      </Style.Intro>
    );
  }
}

export default Home;
