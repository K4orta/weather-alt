import React from 'react';
import Day from './weather-list-day';

export default class WeatherList extends React.Component {
	render() {
		let days = this.props.days.map((forecast, idx)=> {
			return <Day key={idx} dayNum={idx} weather={forecast} isSelected={idx === this.props.currentDay} {...this.props} />
		});

		return (
			<ul className='forecast-list' >
				{days}
			</ul>
		);
	}
}
