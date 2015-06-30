class WeatherStore {
	constructor() {
		this.bindActions(this.alt.getActions('weather'));

		this.currentDay = 0;
		this.data = {};
	}

	dataSuccess(resp) {
		this.setState({
			data: resp
		});
	}
}

export default WeatherStore;