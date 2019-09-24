import * as React from 'react';
import {FormattedMessage} from "react-intl";
import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

function Pokemon(props: Props) {
  return (
    <Style.PokeBox>
      <Style.Title>
        {props.name}
      </Style.Title>
      <Style.Picture>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name}/>
      </Style.Picture>
      <Style.Info>
        <li><FormattedMessage id="pokemon.id" />: {props.id}</li>
        <li><FormattedMessage id="pokemon.height" />: {props.height} cm</li>
        <li><FormattedMessage id="pokemon.weight" />: {props.weight / 10} kg</li>
      </Style.Info>
    </Style.PokeBox>
  );
}

export default Pokemon;
