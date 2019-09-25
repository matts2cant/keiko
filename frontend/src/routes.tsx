import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('./pages/Home'));
const Details = lazy(() => import('./pages/Details'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokedex" component={Home} />
      <Route path="/pokedex/:page" component={Home} />
      <Route path="/pokemon/:id" component={Details} />
    </Switch>
  </Suspense>
);

export default routes;
