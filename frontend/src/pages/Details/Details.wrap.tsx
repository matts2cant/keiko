import {connect} from 'react-redux';
import Actions from 'redux/Pokemon/actions'
import {RootState} from "redux/types";
import Details from './Details';

function mapStateToProps(state: RootState) {
  const pokemon = state.pokemon.detailedPokemon;
  return { pokemon }
}

export default connect(mapStateToProps, Actions)(Details);
