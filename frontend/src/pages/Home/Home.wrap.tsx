import {connect} from 'react-redux';
import Actions from 'redux/Pokemon/actions'
import {RootState} from "redux/types";
import Home from './Home';

function mapStateToProps(state: RootState) {
  const pokemons = Object.values(state.pokemon.pokemons);
  return { pokemons }
}

export default connect(mapStateToProps, Actions)(Home);
