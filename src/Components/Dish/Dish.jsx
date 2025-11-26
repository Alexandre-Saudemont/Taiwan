import React from 'react';

const Dish = ({dish}) => {
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
