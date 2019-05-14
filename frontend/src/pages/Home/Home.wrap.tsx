import withDataFetching from 'HOC/withDataFetching';
import { connect } from 'react-redux';
import { fetchPokemonsRequested } from 'redux/Pokemon/actions';
import { getPokemons } from 'redux/Pokemon/selectors';
import { RootState } from 'redux/types';
import Home, { Props } from './Home';

const mapStateToProps = (state: RootState) => ({
  pokemons: getPokemons(state),
});

const mapDispatchToProps = {
  fetchPokemonsRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withDataFetching<Props>(
    (props: Props) => {
      props.fetchPokemonsRequested(props.match.params.page);
    },
    (props: Props) => [props.match.params.page],
  )(Home),
);
