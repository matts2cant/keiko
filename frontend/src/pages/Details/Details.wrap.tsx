import {connect} from 'react-redux';
import {getDetailedPokemon} from "redux/Pokemon";
import Actions from 'redux/Pokemon/actions'
import {RootState} from "redux/types";
import Details from './Details';

function mapStateToProps(state: RootState) {
  const pokemon = getDetailedPokemon(state);
  return { pokemon }
}

export default connect(mapStateToProps, Actions)(Details);
