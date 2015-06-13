import React from 'react';
import Button from './button';
import validateZip from '../../utils/validate-zip';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.weatherActions = this.props.flux.getActions('weather');
	}

	render() {
		return (
			<div>
				<input type='text' defaultValue={this.props.zipCode} onChange={this._change.bind(this)} />
				<Button />
			</div>
		);
	}

	_change(e) {
		if (validateZip(e.currentTarget.value)) {
			this.weatherActions.changeZip(e.currentTarget.value);
		}
	}
}