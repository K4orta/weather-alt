import React from 'react';
import {Route, DefaultRoute} from 'react-router';


export default (
	<Route name='app' path='/' handler={require('./components/views/layout')}>
		<DefaultRoute name='dashboard' handler={require('./components/views/index')} />
	</Route>
);