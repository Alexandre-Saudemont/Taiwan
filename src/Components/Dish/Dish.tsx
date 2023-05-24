import React from 'react';
import './Dish.scss';
import DishProps from './dishInterface';
// Creating a type for the props

// Creating a functional component, using the property of the props we created above
const Dish = ({dish}: DishProps) => {
	const {title, text, img} = dish;
	return (
		<>
			<React.Fragment>
				<h1 className='dish-title'>{title}</h1>
			</React.Fragment>

			<div className='dish-container'>
				<article className='dish-text'>{text}</article>
				<img className='dish-img' src={img} alt='' />
			</div>
		</>
	);
};
export default Dish;
