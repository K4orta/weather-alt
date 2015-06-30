import React from 'react';
import WeatherList from './weather-list';

export default class WeatherOverlay extends React.Component {
	render() {
		let days = undefined;
		let loaded = false;

		if (this.props.data.daily) {
			loaded = true;
			let weekData = this.props.data.daily.data.slice(0, 7);
			days = <WeatherList days={weekData} currentDay={this.props.currentDay} />;
		}

		return (
			<div className={'overlay' + (loaded ? ' loaded' : '')}>
				{days}
			</div>
		);
	}
};