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

export interface Props extends RouteComponentProps<RouteParams> {
  pokemon?: PokemonType;
  fetchPokemonSuccess: any;
  fetchPokemonRequested: any;
}

interface RouteParams {
  id: string;
}

function Details(props: Props) {
  const { pokemon } = props;

  return (
      <HomeStyle.Intro>
          <HomeStyle.Title><FormattedMessage id="pokemon.pokedex" /></HomeStyle.Title>
          <HomeStyle.Container>
            {pokemon && <Pokemon {...pokemon} detailedView={true} />}
          </HomeStyle.Container>
      </HomeStyle.Intro>
  );
}

export default Details;
