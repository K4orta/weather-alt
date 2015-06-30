import React from 'react';
import {RouteHandler} from 'react-router';
import AltContainer from 'alt/AltContainer';
import Map from '../map/map';
import WeatherOverlay from '../forecast/weather-overlay';

export default class Layout extends React.Component {
	render() {
		return (
			<div className='page'>
				<Map onClick={this._clickMap.bind(this)} />
				<AltContainer store={this.props.flux.getStore('weather')} flux={this.props.flux}>
					<WeatherOverlay />
				</AltContainer>
			</div>	
		);
	}

	_clickMap(e) {
		this.props.flux.getActions('location').setLocation(e.latlng);
		this.props.flux.getActions('weather').fetchWeather(e.latlng);
	}

	_clickDay(e) {

	}
}