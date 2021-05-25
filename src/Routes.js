import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Topics from 'pages/Topics';

const routes = <Switch>
    <Route exact path="/">
        <HomePage />
    </Route>
    <Route path="/topics">
        <Topics />
    </Route>
</Switch>;

export default routes;
