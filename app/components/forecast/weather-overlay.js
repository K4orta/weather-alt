import React from 'react';
import WeatherList from './weather-list';
import DayDetail from './day-detail';

export default class WeatherOverlay extends React.Component {
	render() {
		let days = undefined;
		let loaded = false;
		let dayInfo = undefined;

		if (this.props.data.daily) {
			loaded = true;
			let weekData = this.props.data.daily.data.slice(0, 7);
			days = <WeatherList days={weekData} currentDay={this.props.currentDay} onClick={this.props.onClick} />;
			dayInfo = <DayDetail day={this.props.data.daily.data[this.props.currentDay]} />
		}

		return (
			<div className={'overlay' + (loaded ? ' loaded' : '')}>
				{dayInfo}
				{days}
			</div>
		);
	}
};
