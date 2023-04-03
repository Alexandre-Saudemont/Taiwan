import React from 'react';
import {Outlet} from 'react-router-dom';
import './Home.scss';
import taiwanHome from '../../asset/images/taiwanHome.jpg';
import datas from '../../datas/datas';
import TaipeiNight from '../Taipei/TaipeiNight/TaipeiNight';

function Home() {
	return (
		<div className='home-container'>
			<img className='home-img' src={taiwanHome} alt='paysage-taiwan' />
		</div>
	);
}

export default Home;
