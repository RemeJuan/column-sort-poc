import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from '../page';

export default (
  <Switch>
    <Route exact path="/" component={Page} />
  </Switch>
);
