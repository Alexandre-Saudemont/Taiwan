import React from 'react';
import './Dish.scss';
import DishProps from './dishInterface';

const DishReverse = ({dish}: DishProps) => {
	const {title, text, img} = dish;
	return (
		<>
			<React.Fragment>
				<h1 className='dish-title'>{title}</h1>
			</React.Fragment>

			<div className='dish-container-reverse'>
				<article className='dish-text'>{text}</article>
				<img className='dish-img-reverse' src={img} alt='' />
			</div>
		</>
	);
};
export default DishReverse;
