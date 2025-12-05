import React, {useState} from 'react';
import datas from '../../../datas/datasTaipei/TaipeiNight/datasTaipeiNight';
import images from '../../../datas/datasTaipei/TaipeiNight/images';

function TaipeiNight() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const data = datas[0];

	function nextSlide() {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	}

	function prevSlide() {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	}

	function goToSlide(index) {
		setCurrentIndex(index);
	}

	return (
		<div className='taipei-night'>
			<section className='taipei-night-hero'>
				<div className='taipei-night-hero-content'>
					<p className='taipei-night-kicker'>Marché nocturne</p>
					<h1 className='taipei-night-title'>{data.title}</h1>
					<p className='taipei-night-intro'>{data.text}</p>
				</div>
			</section>

			<section className='taipei-night-gallery'>
				<div className='taipei-night-carousel'>
					<button className='taipei-night-carousel-btn taipei-night-carousel-btn-prev' onClick={prevSlide} aria-label='Image précédente'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</button>

					<div className='taipei-night-carousel-viewport'>
						<div className='taipei-night-carousel-track' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
							{images.map((image, index) => (
								<div key={image.id} className='taipei-night-carousel-slide'>
									<img src={image.src} alt={`Marché nocturne ${index + 1}`} className='taipei-night-carousel-img' />
								</div>
							))}
						</div>
					</div>

					<button className='taipei-night-carousel-btn taipei-night-carousel-btn-next' onClick={nextSlide} aria-label='Image suivante'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</button>
				</div>

				<div className='taipei-night-carousel-indicators'>
					{images.map((_, index) => (
						<button
							key={index}
							className={`taipei-night-carousel-indicator ${index === currentIndex ? 'is-active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Aller à l'image ${index + 1}`}
						/>
					))}
				</div>
			</section>

			<section className='taipei-night-content'>
				<div className='taipei-night-content-inner'>
					<p className='taipei-night-text'>{data.text2}</p>
				</div>
			</section>
		</div>
	);
}

export default TaipeiNight;
