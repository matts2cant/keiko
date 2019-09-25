import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {FormattedMessage} from 'react-intl';
import {RouteComponentProps} from "react-router";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {PokemonType} from 'redux/Pokemon/types'
import {makeGetRequest} from "services/networking/request";
import {normalize} from "services/PokemonNormalizer";
import Style from './Home.style';

interface State {
  page: number;
  loading: boolean;
  error: boolean;
}

interface Props<T> extends RouteComponentProps<T> {
  pokemons: PokemonType[];
  fetchPokemonsSuccess: any;
}

interface RouteParams {
  page: string;
}

class Home extends React.Component<Props<RouteParams>, State> {
  constructor(props: Props<RouteParams>) {
    super(props);
    this.state = {page: 1, loading: false, error: false};
  }

  async componentDidMount() {
    const page = Number(this.props.match.params.page || 1);
    this.updateData(page);
  }

  async componentDidUpdate(prevProps: RouteComponentProps<RouteParams>, prevState: State) {
    const prevPage = Number(prevProps.match.params.page || 1);
    const page = Number(this.props.match.params.page || 1);
    if (prevPage !== page) {
      await this.updateData(page);

    }
  }

  async updateData(page: number) {
    try {
      const response = await makeGetRequest("/pokemon?page=" + page);
      this.props.fetchPokemonsSuccess({
        pokemons: normalize(response.body),
      });
      return response.body;
    } catch (e) {
      console.error(`An error occurred in the Home component: ${e}`);
    }
  }

  render(): React.ReactNode {
    const pokemonComponents = this.props.pokemons.map((data: PokemonType) =>
      <Pokemon {...data} key={data.id.toString()} detailedView={false} />
    );

    const loader = <img src={"/loader.svg"} alt={"loader"}/>;
    const error = <Style.Error><FormattedMessage id="pokemon.error" /></Style.Error>;

    return (
      <Style.Intro>
        <Style.Title><FormattedMessage id="pokemon.pokedex" /></Style.Title>
        <Style.Paginator>
          <Link to={`/pokedex/${this.state.page - 1}`}>&laquo;</Link>
          {this.state.page}
          <Link to={`/pokedex/${this.state.page + 1}`}>&raquo;</Link>
        </Style.Paginator>
        <Style.Container>
          {this.state.loading && loader}
          {!this.state.loading && pokemonComponents}
          {this.state.error && error}
        </Style.Container>
      </Style.Intro>
    );
  }
}

export default Home;
