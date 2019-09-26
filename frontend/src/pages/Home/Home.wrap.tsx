import withDataFetching from 'HOC/WithDataFetching';
import {connect} from 'react-redux';
import {getPokemons} from "redux/Pokemon";
import Actions from 'redux/Pokemon/actions'
import {RootState} from "redux/types";
import {makeGetRequest} from "services/networking/request";
import Home, {Props} from './Home';

function mapStateToProps(state: RootState) {
  const pokemons = Object.values(getPokemons(state));
  return { pokemons }
}

const dataFetchingHome = withDataFetching<Props>(
  'pokemons',
  (props: Props) => makeGetRequest('/pokemon', { page: props.match.params.page }),
  (props: Props) => [props.match.params.page],
)(Home);

export default connect(mapStateToProps, Actions)(dataFetchingHome);
