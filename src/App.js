import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import Topics from 'pages/Topics';

require('./App.scss');

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
