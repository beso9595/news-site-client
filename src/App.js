import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import Header from './views/header/Header.js'
import About from "./views/header/menuitems/About";
import Contact from "./views/header/menuitems/Contact";
import Content from './views/content/Content';
import Footer from './views/footer/Footer.js'
import Login from './views/auth/login/Login';
import Registration from './views/auth/registration/Registration';
import Restore from './views/auth/restore/Restore';
import Util from "./utils/Util";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<div style={{marginTop: 50}}>
					<BrowserRouter>
						<Route path="/" exact render={
							(props) => {
								const queryOb = Util.parseQuery(props.location.search) || {};
								return <Content
									page={queryOb['page']}
									search={queryOb['search']}
									category={queryOb['cat']}
									article={queryOb['article']}
								/>;
							}
						}/>
						<Route path="/about" exact render={() => <About/>}/>
						<Route path="/contact" exact render={() => <Contact/>}/>
						<Route path="/login" exact render={() => <Login/>}/>
						<Route path="/registration" exact render={() => <Registration/>}/>
						<Route path="/restore" exact render={() => <Restore/>}/>
					</BrowserRouter>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
