import withDataFetching from 'HOC/withDataFetching';
import Pokemon, { Props } from './Pokemon';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';
import { fetchPokemonRequested } from 'redux/Pokemon';
import { getPokemon } from 'redux/Pokemon/selectors';

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  pokemon: getPokemon(state, ownProps.match.params.id),
});

const mapDispatchToProps = {
  fetchPokemonRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withDataFetching<Props>(
    (props: Props) => {
      props.fetchPokemonRequested(props.match.params.id);
    },
    (props: Props) => [],
  )(Pokemon),
);
