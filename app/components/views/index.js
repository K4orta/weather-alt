import React from 'react';
import {RouteHandler} from 'react-router';
import AltContainer from 'alt/AltContainer';
import Map from '../map/map';
import WeatherOverlay from '../forecast/weather-overlay';

export default class Layout extends React.Component {
	render() {
		return (
			<div className='page'>
				<AltContainer store={this.props.flux.getStore('location')} flux={this.props.flux}>
					<Map onClick={this._clickMap.bind(this)} />
				</AltContainer>
				<AltContainer store={this.props.flux.getStore('weather')} flux={this.props.flux}>
					<WeatherOverlay onClick={this._clickDay.bind(this)} />
				</AltContainer>
			</div>
		);
	}

	_clickMap(e) {
		this.props.flux.getActions('location').setLocation(e.latlng);
		this.props.flux.getActions('weather').fetchWeather(e.latlng);
	}

	_clickDay(e) {
		this.props.flux.getActions('weather').changeDay(parseInt(e.currentTarget.dataset.key));
	}
}
