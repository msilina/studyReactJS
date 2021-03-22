import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import CardsForm from '../components/CardsForm';
import NotFound from '../components/NotFount';
import CardViewer from '../components/Panel/CardViewer';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ CardsForm } />
        <Route path="/login" component={ Login } />
        <Route path="/card/:id" render={ props => <CardViewer {...props} />} />
        <Route component={ NotFound } />
    </Switch>
);

export default Routes;
