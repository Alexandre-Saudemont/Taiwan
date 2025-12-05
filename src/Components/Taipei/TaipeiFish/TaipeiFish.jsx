import React, {useState} from 'react';
import datas from '../../../datas/datasTaipei/TaipeiFish/datasTaipeiFish';
import images from '../../../datas/datasTaipei/TaipeiFish/images';

function TaipeiFish() {
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
		<div className='taipei-fish'>
			<section className='taipei-fish-hero'>
				<div className='taipei-fish-hero-content'>
					<p className='taipei-fish-kicker'>Marché aux poissons</p>
					<h1 className='taipei-fish-title'>{data.title}</h1>
					<p className='taipei-fish-intro'>{data.text}</p>
				</div>
			</section>

			<section className='taipei-fish-gallery'>
				<div className='taipei-fish-carousel'>
					<button className='taipei-fish-carousel-btn taipei-fish-carousel-btn-prev' onClick={prevSlide} aria-label='Image précédente'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</button>

					<div className='taipei-fish-carousel-viewport'>
						<div className='taipei-fish-carousel-track' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
							{images.map((image, index) => (
								<div key={image.id} className='taipei-fish-carousel-slide'>
									<img src={image.src} alt={`Marché aux poissons ${index + 1}`} className='taipei-fish-carousel-img' />
								</div>
							))}
						</div>
					</div>

					<button className='taipei-fish-carousel-btn taipei-fish-carousel-btn-next' onClick={nextSlide} aria-label='Image suivante'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</button>
				</div>

				<div className='taipei-fish-carousel-indicators'>
					{images.map((_, index) => (
						<button
							key={index}
							className={`taipei-fish-carousel-indicator ${index === currentIndex ? 'is-active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Aller à l'image ${index + 1}`}
						/>
					))}
				</div>
			</section>

			<section className='taipei-fish-content'>
				<div className='taipei-fish-content-inner'>
					<h2 className='taipei-fish-subtitle'>{data.title1}</h2>
					<p className='taipei-fish-text'>{data.text2}</p>
				</div>
			</section>
		</div>
	);
}

export default TaipeiFish;
