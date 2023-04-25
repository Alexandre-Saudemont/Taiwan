import React from 'react';
import './LeThe.scss';
import datas from '../../../datas/datasThe/datasThe';

function LeThe() {
	return (
		<div className='lethe'>
			<h1 className='lethe-title'>{datas.title}</h1>
			<article className='lethe-text'>{datas.text}</article>
			<img src={datas.img} className='lethe-img' alt='taiwan tea' />
			<article className='lethe-text'>{datas.text1}</article>
			<img src={datas.img1} className='lethe-img' alt='oolong tea' />
		</div>
	);
}

export default LeThe;
