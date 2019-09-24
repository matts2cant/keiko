import * as React from 'react';
import Style from './Pokemon.style';
import {FormattedMessage} from "react-intl";

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Style.PokeBox>
        <Style.Title>
          {this.props.name}
        </Style.Title>
        <Style.Picture>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt={this.props.name}/>
        </Style.Picture>
        <Style.Info>
          <li><FormattedMessage id="pokemon.id" />: {this.props.id}</li>
          <li><FormattedMessage id="pokemon.height" />: {this.props.height} cm</li>
          <li><FormattedMessage id="pokemon.weight" />: {this.props.weight / 10} kg</li>
        </Style.Info>
      </Style.PokeBox>
    );
  }
}

export default Pokemon;
