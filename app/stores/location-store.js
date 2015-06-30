class LocationStore {
	constructor() {
		this.bindActions(this.alt.getActions('location'));

		this.location = {
			lat: 0,
			lng: 0
		};
	}

	onSetLocation(loc) {
		this.location = {
			lat: loc.lat, 
			lng: loc.lng
		};
	}
}

export default LocationStore;