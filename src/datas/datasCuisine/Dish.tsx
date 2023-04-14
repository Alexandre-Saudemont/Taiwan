import React from 'react';

// Creating a type for the props
interface Props {
	dish: {
		title: string;
		text: string;
	};
}

const Dish = ({dish}: Props) => {
	const {title, text} = dish;
	return (
		<div className='dish-container'>
			<h1>{title}</h1>
			<article>{text}</article>
		</div>
	);
};
export default Dish;
