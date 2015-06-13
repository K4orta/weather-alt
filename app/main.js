import React from 'react';
import Alt from 'alt';
// import Iso from 'iso';
import routes from './routes';
import Router from 'react-router';
import Flux from './utils/flux';
let flux = new Flux();
// React.render(document.getElementById('content'));
require("!style!css!less!./styles/main.less");

Router.run(
	routes, 
	(Handler) => {
		const app = React.createElement(Handler, {flux});
		React.render(app, document.getElementById('content'));	
	}
);