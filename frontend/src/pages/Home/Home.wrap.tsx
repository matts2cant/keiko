import {connect} from 'react-redux';
import {getPokemons} from "redux/Pokemon";
import Actions from 'redux/Pokemon/actions'
import {RootState} from "redux/types";
import Home from './Home';

function mapStateToProps(state: RootState) {
  const pokemons = Object.values(getPokemons(state));
  return { pokemons }
}

export default connect(mapStateToProps, Actions)(Home);
