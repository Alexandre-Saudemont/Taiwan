import React from 'react';
import './TaipeiNight.scss';
import datas from '../../../datas/datasTaipeiNight/datasTaipeiNight';
import images from '../../../datas/datasTaipeiNight/images';

function TaipeiNight() {
	console.log('image[]', images);
	return (
		<div className='taipeinight-container'>
			{images.map((image: any, index: any) => (
				<React.Fragment key={index}>
					<img className='taipeinight-img' src={image.src} alt='nightMarket' key={image.id} />
				</React.Fragment>
			))}
			{datas.map((data: any, index: any) => (
				<React.Fragment key={index}>
					<div className='taipeinight-article-container'>
						<h1 className='taipeinight-title'>{data.title}</h1>
						<article className='taipeinight-text'>{data.text}</article>
					</div>
				</React.Fragment>
			))}
		</div>
	);
}

export default TaipeiNight;
