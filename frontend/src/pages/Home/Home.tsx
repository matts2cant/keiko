import * as React from 'react';

import Pokemon from 'components/Pokemon';
import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
          </tr>
          <Pokemon name="Carapuce" id={7} />
          <Pokemon name="Carabaffe" id={8} />
          <Pokemon name="Tortank" id={9} />
        </table>
      </Style.Intro>
    );
  }
}

export default Home;
