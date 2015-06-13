import express from 'express';

let app = express();
const SERVER_PORT = 3000;

app.get('/', (req, res)=> {
	res.send('Yo');
});
app.use(express.static('dist'));

let server = app.listen(SERVER_PORT, ()=> {
	console.log(`Started server on port ${SERVER_PORT}`);
});
