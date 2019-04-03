import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  height: number;
  weight: number;
}

const pokeApiUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class Pokemon extends React.Component<Props> {
  render() {
    const { name, id, weight, height } = this.props;
    return (
      <Style.Wrapper>
        <Style.Name>{name}</Style.Name>
        <img src={`${pokeApiUrl}/${id}.png`} />
        <Style.Attribute>Id: {id}</Style.Attribute>
        <Style.Attribute>Weight: {weight / 10} kg</Style.Attribute>
        <Style.Attribute>Height: {height * 10} cm</Style.Attribute>
      </Style.Wrapper>
    );
  }
}

export default Pokemon;
