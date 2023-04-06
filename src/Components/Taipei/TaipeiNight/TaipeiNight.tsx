import React from 'react';
import './TaipeiNight.scss';
import datas from '../../../datas/datasTaipeiNight/datasTaipeiNight';
import images from '../../../datas/datasTaipeiNight/images';
import Carousel from 'react-bootstrap/Carousel';

function TaipeiNight() {
	console.log('image[]', images);
	return (
		<div className='taipeinight-container'>
			{datas.map((data: any, index: any) => (
				<React.Fragment key={index}>
					<h1 className='taipeinight-title'>{data.title}</h1>
					<div className='taipeinight-article-container'>
						<article className='taipeinight-text'>{data.text}</article>
					</div>
				</React.Fragment>
			))}
			<Carousel pause='hover' indicators={false} variant='dark'>
				{images.map((image: any, index: any) => (
					<Carousel.Item interval={7000} key={index}>
						<img className='taipeinight-img' src={image.src} alt='nightMarket' key={image.id} />
					</Carousel.Item>
				))}{' '}
			</Carousel>
			{datas.map((data: any, index: any) => (
				<React.Fragment key={index}>
					<div className='taipeinight-article-container'>
						<article className='taipeinight-text'>{data.text2}</article>
					</div>
				</React.Fragment>
			))}
		</div>
	);
}

export default TaipeiNight;
