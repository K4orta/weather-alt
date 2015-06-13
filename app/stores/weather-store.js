class WeatherStore {
	constructor() {
		this.bindActions(this.alt.getActions('weather'));

		this.zipCode = '94122';
		this.data = {};
	}

	onChangeZip(z) {
		console.log(z + '!!!!');
	}
}

export default WeatherStore;