import * as React from 'react';

import {useEffect, useState} from 'react'
import Style from './WithDataFetching.style';

/* eslint-disable react-hooks/rules-of-hooks */

export interface LoadingProps {
  loading: boolean;
}

const WithDataFetching = <P extends LoadingProps>(
  dataName: string,
  fetchFunction: (props: P) => any,
  shouldCallEffect: (props: P) => any[],
) => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  const [error, setError] = useState<string | null>(null);

  const loading = props.loading || false;

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          await fetchFunction(props);
        } catch (error) {
          setError(error.toString());
        }
      };

      fetchData();
    },
    [...shouldCallEffect(props)],
  );

//  const customProps = {
//    [dataName]: data,
//  };

  return (
    <React.Fragment>
      {loading ? (
        <Style.Loader src="/loader.svg" alt="Loading..." />
      ) : error ? (
        <Style.Error>{error}</Style.Error>
      ) : (
        <BaseComponent {...props}/>
      )}
    </React.Fragment>
  );
};

export default WithDataFetching;
