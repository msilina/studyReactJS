import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from "react-private-public-route";
import { connect } from 'react-redux';

import Login from '../components/Login';
import CardsForm from '../components/CardsForm';
import NotFound from '../components/NotFount';
import CardViewer from '../components/Panel/CardViewer';
import Settings from '../components/settings';

const Routes = (props) => (
    <Switch>
        <Route exact path="/" component={ CardsForm } />
        <PrivateRoute isAuthenticated={ !props.isUserLoggedIn } path="/login" component={ Login } />
        <PrivateRoute isAuthenticated={ props.role === 'Admin' } path="/settings" component={ Settings } />
        <Route path="/card/:id" render={ props => <CardViewer {...props} />} />
        <Route component={ NotFound } />
    </Switch>
);

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.isUserLoggedIn,
        role: state.auth.role
    }
};

export default connect(mapStateToProps, null)(Routes);
