import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {makeGetRequest} from "services/networking/request";
import Style from './Home.style';

interface State {
  pokemons: Array<{
    id: number;
    name: string;
  }>;
}

class Home extends React.Component<{}, State> {
  componentDidMount(): void {
    makeGetRequest("/pokemon")
      .then((response) => {
        this.setState({
          pokemons: response.body.map((data: { id: number; name: string; }) => <Pokemon key={data.id.toString()} name={data.name} id={data.id} />)
        })
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
          </tr>
          {this.state ? this.state.pokemons : ""}
        </table>
      </Style.Intro>
    );
  }
}

export default Home;
