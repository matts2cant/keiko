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
  loading: boolean;
  error: boolean;
}

interface Props<T> extends RouteComponentProps<T> {
  pokemons: PokemonType[];
  fetchPokemonSuccess: any;
  fetchPokemonsSuccess: any;
}

interface RouteParams {
  page: string;
}

class Home extends React.Component<Props<RouteParams>, State> {
  constructor(props: Props<RouteParams>) {
    super(props);
    this.state = {loading: false, error: false};
  }

  async componentDidMount() {
    const page = Number(this.props.match.params.page || 1);
    this.updateData(page);
  }

  async componentDidUpdate(prevProps: Props<RouteParams>, prevState: State) {
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

    const page = Number(this.props.match.params.page || 1);

    return (
      <Style.Intro>
        <Style.Title><FormattedMessage id="pokemon.pokedex" /></Style.Title>
        <Style.Paginator>
          {page > 1 && <Link to={`/pokedex/${page - 1}`}>&laquo;</Link>}
          {page}
          {page < 6 && <Link to={`/pokedex/${page + 1}`}>&raquo;</Link>}
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
