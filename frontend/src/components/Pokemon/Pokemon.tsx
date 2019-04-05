import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

const pokeApiUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const Pokemon = ({ name, id, weight, height }: Props) => (
  <Style.Wrapper>
    <Style.Name>{name}</Style.Name>
    <img src={`${pokeApiUrl}/${id}.png`} />
    <Style.Attribute>Id: {id}</Style.Attribute>
    <Style.Attribute>Weight: {weight / 10} kg</Style.Attribute>
    <Style.Attribute>Height: {height * 10} cm</Style.Attribute>
  </Style.Wrapper>
);

export default Pokemon;
