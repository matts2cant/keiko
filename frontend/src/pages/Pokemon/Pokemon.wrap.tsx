import withDataFetching from 'HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';
import Pokemon, { Props } from './Pokemon';
import { connect } from 'react-redux';
import { PokemonType } from 'redux/Pokemon/types';
import { RootState } from 'redux/types';
import { fetchPokemonSuccess } from 'redux/Pokemon';
import { getPokemon } from 'redux/Pokemon/selectors';

const mapStateToProps = (state: RootState, ownProps: Props) => ({
  pokemon: getPokemon(state, ownProps.match.params.id),
});

const mapDispatchToProps = {
  fetchPokemonSuccess,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withDataFetching<Props>(
    (props: Props) => makeGetRequest(`/pokemon/${props.match.params.id}`),
    (props: Props) => [],
    (props: Props, data: PokemonType) => {
      props.fetchPokemonSuccess(data);
    },
  )(Pokemon),
);
