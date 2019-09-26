import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {FormattedMessage} from 'react-intl';
import {RouteComponentProps} from "react-router";
import {PokemonType} from 'redux/Pokemon/types'
import {makeGetRequest} from "services/networking/request";
import HomeStyle from './../Home/Home.style';
import Style from './Details.style';

interface State {
  loading: boolean,
  error: boolean,
}

interface Props<T> extends RouteComponentProps<T> {
  pokemon?: PokemonType;
  fetchPokemonSuccess: any;
  fetchPokemonsSuccess: any;
}

interface RouteParams {
  id: string;
}

class Details extends React.Component<Props<RouteParams>, State> {
  constructor(props: Props<RouteParams>) {
    super(props);
    this.state = {loading: true, error: false};
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchPokemonData(Number(id));
  }

  async componentDidUpdate(prevProps: Props<RouteParams>, prevState: State) {
    const prevId = prevProps.match.params.id;
    const id = this.props.match.params.id;

    if (prevId !== id) {
      this.fetchPokemonData(Number(id));
    }
  }

  async fetchPokemonData(id: number) {
    try {
      const response = await makeGetRequest("/pokemon/" + id);
      this.props.fetchPokemonSuccess({
        pokemon: response.body,
      });
    } catch (e) {
      console.error(`An error occurred in the Details component: ${e}`);
    }
  }

  render(): React.ReactNode {
    const loader = <img src={"/loader.svg"} alt={"loader"}/>;

    return (
        <HomeStyle.Intro>
            <HomeStyle.Title><FormattedMessage id="pokemon.pokedex" /></HomeStyle.Title>
            <HomeStyle.Container>
              {!this.props.pokemon && loader}
              {this.props.pokemon && <Pokemon {...this.props.pokemon} detailedView={true} />}
            </HomeStyle.Container>
        </HomeStyle.Intro>
    );
  }
}

export default Details;
