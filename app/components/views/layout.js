import React from 'react';
import {RouteHandler} from 'react-router'
export default class Layout extends React.Component {
	render() {
		return (<RouteHandler {...this.props} />);
	}
}