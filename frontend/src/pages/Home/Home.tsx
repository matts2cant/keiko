import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {FormattedMessage} from 'react-intl';
import {RouteComponentProps} from "react-router";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {makeGetRequest} from "services/networking/request";
import Style from './Home.style';

interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
}

interface State {
  page: number;
  loading: boolean;
  error: boolean;
  pokemons: PokemonData[];
}

interface RouteParams {
  page: string;
}

class Home extends React.Component<RouteComponentProps<RouteParams>, State> {
  constructor(props: RouteComponentProps<RouteParams>) {
    super(props);
    this.state = {page: 1, loading: true, error: false, pokemons: []};
  }

  async componentDidMount() {
    const page = Number(this.props.match.params.page || 1);
    await this.updateData(page);
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
      this.setState({
        page,
        loading: false,
        error: false,
        pokemons: response.body,
      });
    } catch (e) {
      this.setState({
        page,
        loading: false,
        error: true,
        pokemons: [],
      });
      console.error(`An error occurred in the Home component: ${e}`);
    }
  }

  render(): React.ReactNode {
    const pokemonComponents = this.state.pokemons.map((data: PokemonData) =>
      <Pokemon key={data.id.toString()} detailedView={false} id={data.id} name={data.name} height={data.height} weight={data.weight} />
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
