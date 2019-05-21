import React from 'react'

import { Switch, Route } from 'react-router'
import Home from '../../pages/home'

import History from 'history/createMemoryHistory';
export default props => (
    <div className='content-wrapper'> 
        <Switch history={History}>
            <Route exact path='/' component={Home} />
        </Switch>
    </div>
)