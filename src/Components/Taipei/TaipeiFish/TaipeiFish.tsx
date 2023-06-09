import React from 'react';
import './TaipeiFish.scss';
import datas from '../../../datas/datasTaipei/TaipeiFish/datasTaipeiFish';
import images from '../../../datas/datasTaipei/TaipeiFish/images';
import Carousel from 'react-bootstrap/Carousel';

function TaipeiFish() {
	return (
		<div className='taipeifish-container'>
			{datas.map((data: any, index: any) => (
				<React.Fragment key={index}>
					<h1 className='taipeifish-title'>{data.title}</h1>
					<div className='taipeifish-article-container'>
						<article className='taipeifish-text'>{data.text}</article>
					</div>
					<Carousel pause='hover' indicators={false} variant='dark'>
						{images.map((image: any) => (
							<Carousel.Item interval={5000} key={image.id}>
								<img className='taipeifish-img' src={image.src} alt='fistMarket' />
							</Carousel.Item>
						))}
					</Carousel>
				</React.Fragment>
			))}
			{datas.map((data: any, index: any) => (
				<React.Fragment key={index}>
					<h1 className='taipeifish-title'>{data.title1}</h1>
					<div className='taipeifish-article-container'>
						<article className='taipeifish-text'>{data.text2}</article>
					</div>
				</React.Fragment>
			))}
		</div>
	);
}

export default TaipeiFish;
