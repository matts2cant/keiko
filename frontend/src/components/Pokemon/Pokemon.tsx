import * as React from 'react';

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
      <div>
        <div>Nom: {name}</div>
        <div>Id: {id}</div>
        <div>Poids: {weight}</div>
        <div>Taille: {height}</div>
        <img src={`${pokeApiUrl}/${id}.png`} />
      </div>
    );
  }
}

export default Pokemon;
