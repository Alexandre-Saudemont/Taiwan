import React from 'react';
import dataSoupe from './datasCuisine';

function soupeComponent() {
	const {title, text, text1} = dataSoupe;

	return (
		<div className='soupe-container'>
			<h1>{title}</h1>
			<article>{text}</article>
			<article>{text1}</article>
		</div>
	);
}

export default soupeComponent;
