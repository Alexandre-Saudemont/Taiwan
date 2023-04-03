import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {Outlet, useMatch} from 'react-router-dom';

function App() {
	const isHome = useMatch({path: '/'});

	return (
		<div className='App'>
			<Header />
			{isHome && <Home />}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
