import React from 'react';

import routes from 'src/Routes';
import Header from 'components/Header';

require('./App.scss');

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                {routes}
            </div>
        </div>
    );
};

export default App;
