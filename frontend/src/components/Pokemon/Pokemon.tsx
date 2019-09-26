import * as React from 'react';
import { useState } from 'react';
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";
import Style from './Pokemon.style';

interface Props {
  detailedView: boolean;
  name: string;
  id: number;
  height: number;
  weight: number;
}

function Pokemon(props: Props) {
  const [flipped, setFlipped] = useState(false);
  const toggleFlip = () => setFlipped(!flipped);

  return (
      <Style.PokeBox>
        <Style.Title>
          <Link to={`/pokemon/${props.id}`}>
            {props.name}
          </Link>
        </Style.Title>
        {!props.detailedView && <Style.FlipButton>
          <img onClick={toggleFlip} src="/flip.svg" alt="Flip pokemon"/>
        </Style.FlipButton>}
        {!props.detailedView && <Style.Picture>
          {!flipped && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name}/>}
          {flipped && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`} alt={props.name}/>}
        </Style.Picture>}
        {props.detailedView && <Style.Picture>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.name}/>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`} alt={props.name}/>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.id}.png`} alt={props.name}/>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${props.id}.png`} alt={props.name}/>
        </Style.Picture>}

        <Style.Info>
          <li><FormattedMessage id="pokemon.id" />: {props.id}</li>
          <li><FormattedMessage id="pokemon.height" />: {props.height * 10} cm</li>
          <li><FormattedMessage id="pokemon.weight" />: {props.weight / 10} kg</li>
        </Style.Info>
      </Style.PokeBox>
  );
}

export default Pokemon;
