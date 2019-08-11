import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import history from './History';

import CRUD from './CRUD';
import IndexInsUpd from '../components/insupd/index';
import store from '../appState/store'

const CustomRoutes = () => (
    <Provider store={store}>
        <Router history={history}>

            <Switch>
                <Route exact path='/' component={CRUD} />
                <Route path='/insupd/:id?' component={IndexInsUpd} />
                {/* <Route path='/contact/:id' component={Contact} />
                <Route path='/test' component={Test} />*/}
                <Redirect to="/" />
            </Switch>

        </Router>
    </Provider>
)


export default CustomRoutes;