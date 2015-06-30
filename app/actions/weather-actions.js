import weatherLoader from '../utils/weather-loader';

class WeatherActions {
	constructor() {
		this.generateActions(
			'dataSuccess'
		);
	}

	async fetchWeather(loc) {
		let data = await weatherLoader(loc);
		let json = await data.json();
		return this.actions.dataSuccess(json);
	}
};

export default WeatherActions;