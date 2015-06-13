import React from 'react';
import L from 'leaflet';

export default class Map extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.map = L.map('map', {zoomControl: false});
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		    attribution: '',
		    maxZoom: 18,
		    id: 'esywong.knhb5lop',
		    accessToken: 'pk.eyJ1IjoiZXN5d29uZyIsImEiOiJ1NDRVelhzIn0.xoeElIZkx4qclq5ihnzZvw'
		}).addTo(this.map);
		new L.Control.Zoom({ position: 'bottomright' }).addTo(this.map);

		this.map.setView([37.7816579, -122.4045532], 13);
	}

	render() {
		return (
			<div id="map"></div>
		);
	}
};
