import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import Style from './Pokemon.style';
import { PokemonType } from 'redux/Pokemon/types';

interface RouteParams {
  id: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemon: PokemonType | null;
  fetchPokemonSuccess: (pokemon: PokemonType) => void;
}

const pokeApiUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const Pokemon = (props: Props) => {
  const { id } = props.match.params;
  const { pokemon } = props;

  return (
    <Style.Wrapper>
      {pokemon && (
        <React.Fragment>
          <Style.Title>{pokemon.name}</Style.Title>
          <Style.PokemonWrapper>
            <div>
              <img src={`${pokeApiUrl}/${id}.png`} />
              <img src={`${pokeApiUrl}/back/${id}.png`} />
            </div>
            <div>
              <img src={`${pokeApiUrl}/shiny/${id}.png`} />
              <img src={`${pokeApiUrl}/back/shiny/${id}.png`} />
            </div>
            <div>
              <Style.Attribute>Height: {pokemon.height}</Style.Attribute>
              <Style.Attribute>Weight: {pokemon.weight}</Style.Attribute>
              <Style.Attribute>Id: {id}</Style.Attribute>
            </div>
          </Style.PokemonWrapper>
        </React.Fragment>
      )}
    </Style.Wrapper>
  );
};

export default Pokemon;
