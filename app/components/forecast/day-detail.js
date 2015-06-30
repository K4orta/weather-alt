import React from 'react';
import moment from 'moment';

export default class DayDetail extends React.Component {
	render() {
		let date = moment(this.props.day.time*1000).format('LL');
		let sunrise = moment(this.props.day.sunriseTime*1000).format('LT');
		let sunset = moment(this.props.day.sunsetTime*1000).format('LT');

		return (
			<div className='day-detail'>
				<h1>{date}</h1>
				<h3>{this.props.day.summary}</h3>
				<div>Wind Speed: {this.props.day.windSpeed}mph</div>
				<div>Sunrise: {sunrise}</div>
				<div>Sunset: {sunset}</div>
			</div>
		);
	}
}