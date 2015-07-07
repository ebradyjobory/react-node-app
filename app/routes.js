import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from 'components/App.react';
import Vote from 'components/Vote.react';

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="vote" handler={Vote} />
    <DefaultRoute handler={Vote} />
  </Route>
);

export default routes;
