import * as React from 'react';

interface Props {
  name: string;
  id: number;
}

const pokeApiUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class Pokemon extends React.Component<Props> {
  render() {
    const { name, id } = this.props;
    return (
      <div>
        <div>Nom: {name}</div>
        <div>Id: {id}</div>
        <img src={`${pokeApiUrl}/${id}.png`} />
      </div>
    );
  }
}

export default Pokemon;
