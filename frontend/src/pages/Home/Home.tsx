import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {useEffect, useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {RouteComponentProps} from "react-router";
import {Link} from "react-router-dom";
import {PokemonType} from 'redux/Pokemon/types'
import {makeGetRequest} from "services/networking/request";
import {normalize} from "services/PokemonNormalizer";
import Style from './Home.style';

interface Props<T> extends RouteComponentProps<T> {
  pokemons: PokemonType[];
  fetchPokemonSuccess: any;
  fetchPokemonsSuccess: any;
}

interface RouteParams {
  page: string;
}

function Home(props: Props<RouteParams>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData  = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await makeGetRequest("/pokemon?page=" + Number(props.match.params.page || 1));
        props.fetchPokemonsSuccess({
          pokemons: normalize(response.body),
        });
      } catch (e) {
        setError(true);
        console.error(`An error occurred in the Home component: ${e}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [props.match.params.page]);

  const pokemonComponents = props.pokemons.map((data: PokemonType) =>
    <Pokemon {...data} key={data.id.toString()} detailedView={false} />
  );

  const loader = <img src={"/loader.svg"} alt={"loader"}/>;
  const errorMsg = <Style.Error><FormattedMessage id="pokemon.error" /></Style.Error>;

  const page = Number(props.match.params.page || 1);

  return (
    <Style.Intro>
      <Style.Title><FormattedMessage id="pokemon.pokedex" /></Style.Title>
      <Style.Paginator>
        {page > 1 && <Link to={`/pokedex/${page - 1}`}>&laquo;</Link>}
        {page}
        {page < 6 && <Link to={`/pokedex/${page + 1}`}>&raquo;</Link>}
      </Style.Paginator>
      <Style.Container>
        {error && errorMsg}
        {loading && loader}
        {!loading && pokemonComponents}
      </Style.Container>
    </Style.Intro>
  );

}

export default Home;
