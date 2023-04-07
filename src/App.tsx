import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {Outlet, useMatch} from 'react-router-dom';

function App() {
	const isHome = useMatch({path: '/'});

	return (
		<div className='App'>
			<Header />
			{/* if the path doesn't match the '/' then the composant Home is not displayed */}
			{isHome && <Home />}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
