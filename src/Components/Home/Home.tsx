import React from 'react';
import './Home.scss';
import taiwanHome from '../../asset/images/taiwanHome1.jpg';
import datas from '../../datas/datasHome/datasHome.js';

function Home() {
	return (
		<div className='home-container'>
			<img className='home-img' src={taiwanHome} alt='paysage-taiwan' />
			{datas.map((data: any, index: any) => (
				<React.Fragment key={index}>
					<div className='text-container'>
						<h1 className='home-title'>{data.title}</h1>
						<article className='home-text'>{data.text}</article>
						<article className='home-text1'>{data.text1}</article>
					</div>
				</React.Fragment>
			))}
		</div>
	);
}

export default Home;
