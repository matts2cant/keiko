import * as React from 'react';

import {useEffect, useState} from 'react'
import Style from './WithDataFetching.style';

/* eslint-disable react-hooks/rules-of-hooks */

const WithDataFetching = <P extends object>(
  dataName: string,
  fetchFunction: (props: P) => any,
  shouldCallEffect: (props: P) => any[],
) => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);
        try {
          await fetchFunction(props);
        } catch (error) {
          setError(error.toString());
        }
        setLoading(false);
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
