import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import queryString from 'query-string';

import './App.css';

import Header from './top/header/Header.js'
import About from "./about/About";
import Contact from "./contact/Contact";
import Content from './middle/content/Content';
import Footer from './bottom/footer/Footer.js'
import Login from './login/Login';
import Registration from './registration/Registration';
import Restore from './restore/Restore';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<BrowserRouter>
					<div>
						<Route path="/" exact render={
							(props) => {
								const queryOb = queryString.parse(props.location.search) || {};
								return <Content
									page={queryOb['page']}
									search={queryOb['search']}
									category={queryOb['cat']}
									article={queryOb['article']}
								/>;
							}
						}/>
						<Route path="/about" exact render={
							() => {
								return <About/>;
							}
						}/>
						<Route path="/contact" exact render={
							() => {
								return <Contact/>;
							}
						}/>
						<Route path="/login" exact render={
							() => {
								return <Login/>;
							}
						}/>
						<Route path="/registration" exact render={
							() => {
								return <Registration/>;
							}
						}/>
						<Route path="/restore" exact render={
							() => {
								return <Restore/>;
							}
						}/>
					</div>
				</BrowserRouter>
				<Footer/>
			</div>
		);
	}
}

export default App;
