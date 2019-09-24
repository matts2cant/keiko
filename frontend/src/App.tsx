import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from "styled-components";

import Root from './components/Root';
import Routes from './routes';

interface Props {
  history: History;
  persistor: Persistor;
  store: Store;
}

const RootComponentWithRoutes: React.FunctionComponent = () => (
  <Root>
    <Routes />
  </Root>
);

const CustomFont = createGlobalStyle`
  @font-face {
    font-family: 'pokemon_gb';
    src: url('font/pokemon_gb-webfont.woff2') format('woff2'),
         url('font/pokemon_gb-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const App: React.FunctionComponent<Props> = ({ history, persistor, store }) => (
  <Provider store={store}>
    <CustomFont />
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route path="/" component={RootComponentWithRoutes} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
