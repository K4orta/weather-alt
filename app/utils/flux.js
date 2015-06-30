import Alt from 'alt';

class Flux extends Alt {
	constructor(spec = {}) {
		super(spec);

		this.addActions('weather', require('../actions/weather-actions'));
		this.addStore('weather', require('../stores/weather-store'));

		this.addActions('location', require('../actions/location-actions'));
		this.addStore('location', require('../stores/location-store'));
	}
};

export default Flux;