import * as React from 'react';

import Pokemon from 'components/Pokemon';
import {useEffect, useState} from "react";
import {FormattedMessage} from 'react-intl';
import {RouteComponentProps} from "react-router";
import {PokemonType} from 'redux/Pokemon/types'
import {makeGetRequest} from "services/networking/request";
import {normalize} from "services/PokemonNormalizer";
import HomeStyle from './../Home/Home.style';
import Style from './Details.style';

interface Props<T> extends RouteComponentProps<T> {
  pokemon?: PokemonType;
  fetchPokemonSuccess: any;
  fetchPokemonsSuccess: any;
}

interface RouteParams {
  id: string;
}

function Details(props: Props<RouteParams>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData  = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await makeGetRequest("/pokemon/" + props.match.params.id);
        props.fetchPokemonSuccess({
          pokemon: response.body,
        });
      } catch (e) {
        setError(true);
        console.error(`An error occurred in the Home component: ${e}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [props.match.params.id]);

  const loader = <img src={"/loader.svg"} alt={"loader"}/>;
  const errorMsg = <HomeStyle.Error><FormattedMessage id="pokemon.error" /></HomeStyle.Error>;

  return (
      <HomeStyle.Intro>
          <HomeStyle.Title><FormattedMessage id="pokemon.pokedex" /></HomeStyle.Title>
          <HomeStyle.Container>
            {error && errorMsg}
            {loading && loader}
            {!loading && props.pokemon && <Pokemon {...props.pokemon} detailedView={true} />}
          </HomeStyle.Container>
      </HomeStyle.Intro>
  );
}

export default Details;
