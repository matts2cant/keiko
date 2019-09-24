import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {FormattedMessage} from 'react-intl';
import {makeGetRequest} from "services/networking/request";
import Style from './Home.style';

interface State {
  pokemons: Array<{
    id: number;
    name: string;
    height: number;
    weight: number;
  }>;
}

class Home extends React.Component<{}, State> {
  componentDidMount(): void {
    makeGetRequest("/pokemon")
      .then((response) => {
        this.setState({
          pokemons: response.body.map((data: { id: number; name: string; height: number; weight: number; }) => <Pokemon key={data.id.toString()} id={data.id} name={data.name} height={data.height} weight={data.weight} />)
        })
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div><FormattedMessage id="pokemon.welcome" /></div>
        <table>
          <tr>
            <th>#</th>
            <th></th>
            <th><FormattedMessage id="pokemon.name" /></th>
            <th><FormattedMessage id="pokemon.height" /></th>
            <th><FormattedMessage id="pokemon.weight" /></th>
          </tr>
          {this.state ? this.state.pokemons : ""}
        </table>
      </Style.Intro>
    );
  }
}

export default Home;
