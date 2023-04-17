import React from 'react';
import './Dish.scss';
// Creating a type for the props
interface Props {
	dish: {
		title: string;
		text: string;
		img: any;
	};
}

const DishReverse = ({dish}: Props) => {
	const {title, text, img} = dish;
	return (
		<>
			<React.Fragment>
				<h1 className='dish-title'>{title}</h1>
			</React.Fragment>

			<div className='dish-container-reverse'>
				<article className='dish-text'>{text}</article>
				<img className='dish-img-reverse fadeInUp' src={img} alt='' />
			</div>
		</>
	);
};
export default DishReverse;
