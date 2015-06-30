import fetch from 'isomorphic-fetch'; 

export default (loc)=> {
	return fetch(`http://localhost:3000/weather/${loc.lat}/${loc.lng}`);
};