import React from 'react';
import moment from 'moment';
import translateIcon from '../../utils/translate-icon';

export default class WeaterListDay extends React.Component {
	render() {
		let weekDay = moment(this.props.weather.time * 1000).format('ddd');
		let icon = translateIcon(this.props.weather.icon);
		let {temperatureMin, temperatureMax} = this.props.weather;

		return (
			<li className={'day' + (this.props.isSelected ? ' is-selected' : '')} onClick={this.props.dayClick} data-key={this.props.dayNum}>
				<div className='day__label'>{weekDay}</div>
				<div className={'day__icon wi wi-'+ icon}></div>
				<div className='day__temp'>
					{Math.round(temperatureMin)} / {Math.round(temperatureMax)}
					<i className='day__temp__unit wi wi-fahrenheit'></i>
				</div>
			</li>
		);
	}
}