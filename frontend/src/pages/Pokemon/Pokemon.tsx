import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import Style from './Pokemon.style';
import { PokemonType } from 'redux/Pokemon/types';
import { FormattedMessage } from 'react-intl';

interface RouteParams {
  id: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemon: PokemonType | null;
  fetchPokemonRequested: (id: string) => void;
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
              <img src={`${pokeApiUrl}/${id}.png`} alt={pokemon.name} />
              <img src={`${pokeApiUrl}/back/${id}.png`} alt={pokemon.name} />
            </div>
            <div>
              <img src={`${pokeApiUrl}/shiny/${id}.png`} alt={pokemon.name} />
              <img src={`${pokeApiUrl}/back/shiny/${id}.png`} alt={pokemon.name} />
            </div>
            <div>
              <Style.Attribute>
                <FormattedMessage id="pokemon.height" />: {pokemon.height}
              </Style.Attribute>
              <Style.Attribute>
                <FormattedMessage id="pokemon.weight" />: {pokemon.weight}
              </Style.Attribute>
              <Style.Attribute>
                <FormattedMessage id="pokemon.id" />: {id}
              </Style.Attribute>
            </div>
          </Style.PokemonWrapper>
        </React.Fragment>
      )}
    </Style.Wrapper>
  );
};

export default Pokemon;
