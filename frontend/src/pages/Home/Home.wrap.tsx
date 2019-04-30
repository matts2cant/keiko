import withDataFetching from 'HOC/withDataFetching';
import { connect } from 'react-redux';
import { fetchPokemonsSuccess } from 'redux/Pokemon/actions';
import { getPokemons } from 'redux/Pokemon/selectors';
import { PokemonType } from 'redux/Pokemon/types';
import { RootState } from 'redux/types';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';
import { normalize } from 'redux/Pokemon/normalizer';

const mapStateToProps = (state: RootState) => ({
  pokemons: getPokemons(state),
});

const mapDispatchToProps = {
  fetchPokemonsSuccess,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withDataFetching<Props>(
    (props: Props) => makeGetRequest('/pokemon', { page: props.match.params.page }),
    (props: Props) => [props.match.params.page],
    (props: Props, data: PokemonType[]) => {
      props.fetchPokemonsSuccess(normalize(data));
    },
  )(Home),
);
