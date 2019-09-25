import {connect} from 'react-redux';
import {RootState} from "redux/types";
import Home from './Home';

function mapStateToProps(state: RootState) {
  const pokemons = Object.values(state.pokemon);
  return { pokemons }
}

export default connect(mapStateToProps)(Home);
