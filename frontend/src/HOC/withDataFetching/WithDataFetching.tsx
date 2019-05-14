import * as React from 'react';

import Style from './WithDataFetching.style';
import loader from '../../loader.svg';

const WithDataFetching = <P extends object>(
  fetchFunction: (props: P) => any,
  shouldCallEffect: (props: P) => any[],
) => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(
    () => {
      fetchFunction(props);
    },
    [...shouldCallEffect(props)],
  );

  return (
    <React.Fragment>
      {loading ? (
        <Style.Loader src={loader} alt="Loading..." />
      ) : error ? (
        <Style.Error>{error}</Style.Error>
      ) : (
        <BaseComponent {...props} />
      )}
    </React.Fragment>
  );
};

export default WithDataFetching;
