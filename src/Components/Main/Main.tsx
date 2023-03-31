import React from 'react';
import './Main.scss';
import Taipei from '../Taipei/Taipei';
import datas from '../../datas/datas';
import TaipeiNight from '../Taipei/TaipeiNight/TaipeiNight';
import Home from '../Home/Home';
import {Outlet} from 'react-router-dom';

function Main() {
	return (
		<div className='main-container'>
			<Outlet />
		</div>
	);
}

export default Main;
