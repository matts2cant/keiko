import withDataFetching from "HOC/WithDataFetching";
import {connect} from 'react-redux';
import {getDetailedPokemon} from "redux/Pokemon";
import Actions from 'redux/Pokemon/actions'
import {RootState} from "redux/types";
import {makeGetRequest} from "services/networking/request";
import Home, {Props} from "../Details/Details";
import Details from './Details';

function mapStateToProps(state: RootState) {
  const pokemon = getDetailedPokemon(state);
  return { pokemon }
}

const dataFetchingDetails = withDataFetching<Props>(
  'pokemon',
  (props: Props) => makeGetRequest('/pokemon/' + props.match.params.id),
  (props: Props) => [props.match.params.id],
)(Details);

export default connect(mapStateToProps, Actions)(dataFetchingDetails);
