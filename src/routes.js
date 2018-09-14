import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';

export default (
    <Route path='/' component={Navigation}>
    	<IndexRoute component={Home}/>
    	<Route path ='Contact' component={Contact}/>
    </Route>
);