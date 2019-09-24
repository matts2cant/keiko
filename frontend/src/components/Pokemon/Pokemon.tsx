import * as React from 'react';

interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <tr>
        <td>
          {this.props.id}
        </td>
        <td>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt={this.props.name}/>
        </td>
        <td>
          {this.props.name}
        </td>
      </tr>
    );
  }
}

export default Pokemon;
