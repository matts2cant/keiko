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

interface RouteParams {
  page: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemons: PokemonType[];
  fetchPokemonsSuccess: any;
  fetchPokemonsRequested: any;
  loading: boolean;
}

function Home(props: Props) {
  const page = Number(props.match.params.page || 1);
  const { pokemons } = props;

  const pokemonComponents = props.pokemons.map((data: PokemonType) =>
    <Pokemon {...data} key={data.id.toString()} detailedView={false} />
  );

  return (
    <Style.Intro>
      <Style.Title><FormattedMessage id="pokemon.pokedex" /></Style.Title>
      <Style.Paginator>
        {page > 1 && <Link to={`/pokedex/${page - 1}`}>&laquo;</Link>}
        {page}
        {page < 6 && <Link to={`/pokedex/${page + 1}`}>&raquo;</Link>}
      </Style.Paginator>
      <Style.Container>
        {!!pokemons.length && pokemonComponents}
      </Style.Container>
    </Style.Intro>
  );

}

export default Home;
