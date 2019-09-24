import * as React from 'react';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';

    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
          pokemons !
        </div>
        <div>Commence par créer ton premier pokemon: {pokemon}</div>
        <table>
          <tr>
            <th>
              #
            </th>
            <th>
              Image
            </th>
            <th>
              Name
            </th>
          </tr>
          <tr>
            <td>
              7
            </td>
            <td>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Carapuce"/>
            </td>
            <td>
              Carapuce
            </td>
          </tr>
        </table>
      </Style.Intro>
    );
  }
}

export default Home;
