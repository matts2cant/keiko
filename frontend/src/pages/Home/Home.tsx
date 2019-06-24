import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Style from './Home.style';
import { RouteComponentProps } from 'react-router';
import { PokemonType } from 'redux/Pokemon/types';

interface RouteParams {
  page: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemons: PokemonType[];
  fetchPokemonsRequested: (page: string) => void;
}

const Home = (props: Props) => {
  const page = parseInt(props.match.params.page, 10);
  const { pokemons } = props;

  return (
    <Style.Wrapper>
      <Style.Title>
        <FormattedMessage id="home.pokedex" />
      </Style.Title>
      <Style.PageLinkWrapper>
        {page > 1 && <Style.PageLink to={`/pokedex/${page - 1}`}>&lt;</Style.PageLink>}
        <Style.PageLink to={`/pokedex/${page + 1}`}>&gt;</Style.PageLink>
      </Style.PageLinkWrapper>
      <Style.PokemonsWrapper>
        {!!pokemons.length &&
          pokemons.map(({ name, title, id, height, weight }) => (
            <Style.Pokemon
              name={name}
              title={title}
              weight={weight}
              height={height}
              id={id}
              key={id}
            />
          ))}
      </Style.PokemonsWrapper>
    </Style.Wrapper>
  );
};

export default Home;
