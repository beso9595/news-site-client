import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

let render = () => {
	ReactDOM.render(<App/>, document.getElementById('root'));
};

if (localStorage.getItem('token')) {
	fetch('/user/validate-token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({token: localStorage.getItem('token')})
	}).then(function (response) {
		if (response.status === 401) {
			localStorage.removeItem('token');
		}
	}).catch(function (error) {
		console.log(error);
	}).finally(function () {
		render();
	});
} else {
	render();
}
