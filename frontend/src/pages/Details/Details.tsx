import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {FormattedMessage} from 'react-intl';
import {RouteComponentProps} from "react-router";
import {makeGetRequest} from "services/networking/request";
import HomeStyle from './../Home/Home.style';
import Style from './Details.style';

interface State {
  loading: boolean,
  error: boolean,
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
  };
}

interface RouteParams {
  id: string;
}

class Details extends React.Component<RouteComponentProps<RouteParams>, State> {
  constructor(props: RouteComponentProps<RouteParams>) {
    super(props);
    this.state = {loading: true, error: false, pokemon: { id: 0, name: "", height: 0, weight: 0}};
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const response = await makeGetRequest("/pokemon/" + id);
      this.setState({
        loading: false,
        error: false,
        pokemon: {
          id: response.body.id,
          name: response.body.name,
          height: response.body.height,
          weight: response.body.weight,
        },
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
        pokemon: { id: 0, name: "", height: 0, weight: 0},
      });
      console.error(`An error occurred in the Details component: ${e}`);
    }
  }

  render(): React.ReactNode {
    const loader = <img src={"/loader.svg"} alt={"loader"}/>;

    return (
        <HomeStyle.Intro>
            <HomeStyle.Title><FormattedMessage id="pokemon.pokedex" /></HomeStyle.Title>
            <HomeStyle.Container>
              {this.state.loading && loader}
              {!this.state.loading && <Pokemon detailedView={true} id={this.state.pokemon.id} name={this.state.pokemon.name} height={this.state.pokemon.height} weight={this.state.pokemon.weight}/>}
              {this.state.error && <HomeStyle.Error><FormattedMessage id="pokemon.error" /></HomeStyle.Error>}
            </HomeStyle.Container>
        </HomeStyle.Intro>
    );
  }
}

export default Details;
