import * as React from 'react';

import Style from './Pokemon.style';
import turnIcon from '../../turn-ico.svg';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

type PositionType = 'back' | 'front';

const pokeFrontApiUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
const pokeBackApiUrl = `${pokeFrontApiUrl}/back`;

const getSpriteUrl = (position: PositionType, id: number) => {
  const spriteUrls = {
    front: `${pokeFrontApiUrl}/${id}.png`,
    back: `${pokeBackApiUrl}/${id}.png`,
  };

  return spriteUrls[position];
};

const Pokemon = ({ name, id, weight, height }: Props) => {
  const [position, setPosition] = React.useState<PositionType>('front');

  const repositionPokemon = (event: React.MouseEvent) => {
    event.preventDefault();
    setPosition(position === 'front' ? 'back' : 'front');
  };

  return (
    <Style.Wrapper to={`pokemon/${id}`}>
      <Style.Name>{name}</Style.Name>
      <img src={getSpriteUrl(position, id)} />
      <Style.TurnIcon onClick={repositionPokemon} src={turnIcon} />
      <Style.Attribute>Id: {id}</Style.Attribute>
      <Style.Attribute>Weight: {weight / 10} kg</Style.Attribute>
      <Style.Attribute>Height: {height * 10} cm</Style.Attribute>
    </Style.Wrapper>
  );
};

export default Pokemon;
