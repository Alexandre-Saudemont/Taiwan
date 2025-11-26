import React from 'react';
import datas from '../../../datas/datasTaipei/TaipeiNight/datasTaipeiNight';
import images from '../../../datas/datasTaipei/TaipeiNight/images';
import Carousel from 'react-bootstrap/Carousel';

function TaipeiNight() {
	return (
		<div className='taipeinight-container'>
			{datas.map((data, index) => (
				<React.Fragment key={index}>
					<h1 className='taipeinight-title'>{data.title}</h1>
					<div className='taipeinight-article-container'>
						<article className='taipeinight-text'>{data.text}</article>
					</div>
				</React.Fragment>
			))}
			<Carousel pause='hover' indicators={false} variant='dark'>
				{images.map((image, index) => (
					<Carousel.Item interval={5000} key={index}>
						<img className='taipeinight-img' src={image.src} alt='nightMarket' key={image.id} />
					</Carousel.Item>
				))}
			</Carousel>
			{datas.map((data, index) => (
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
