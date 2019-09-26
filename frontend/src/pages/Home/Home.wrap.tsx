import withDataFetching from 'components/HOC/WithDataFetching';
import {connect} from 'react-redux';
import {getPokemons} from "redux/Pokemon";
import Actions from 'redux/Pokemon/actions'
import {RootState} from "redux/types";
import {makeGetRequest} from "services/networking/request";
import {normalize} from "services/PokemonNormalizer";
import Home, {Props} from './Home';

function mapStateToProps(state: RootState) {
  const pokemons = Object.values(getPokemons(state));
  return { pokemons }
}

const dataFetchingHome = withDataFetching<Props>(
  'pokemons',
  async (props: Props) => {
    props.fetchPokemonsRequested({
      page: Number(props.match.params.page || 1),
    });
  },
  (props: Props) => [props.match.params.page],
)(Home);

export default connect(mapStateToProps, Actions)(dataFetchingHome);
