import * as React from 'react';
import { useState } from 'react';
import {FormattedMessage} from "react-intl";
import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

function Pokemon(props: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Style.PokeBox>
      <Style.Title>
        {props.name}
      </Style.Title>
      <Style.FlipButton>
        <img onClick={() => setFlipped(!flipped)} src="flip.svg" alt="Flip pokemon"/>
      </Style.FlipButton>
      <Style.Picture>
        {!flipped && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name}/>}
        {flipped && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`} alt={props.name}/>}
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
