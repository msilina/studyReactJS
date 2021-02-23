import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import CardsForm from '../components/CardsForm';
import NotFound from '../components/NotFount';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ CardsForm } />
        <Route exact path="/login" component={ Login } />
        <Route component={ NotFound } />
    </Switch>
);

export default Routes;
