import React from 'react';
import {RouteHandler} from 'react-router';
import AltContainer from 'alt/AltContainer';
import ZipInput from '../ui/zip-input';
import Map from '../map/map';

export default class Layout extends React.Component {
	render() {
		return (
			<div className='page'>
				<Map />
				<h1>Hello!</h1>
				<AltContainer store={this.props.flux.getStore('weather')} flux={this.props.flux}>
					<ZipInput />
				</AltContainer>
			</div>	
		);
	}
}