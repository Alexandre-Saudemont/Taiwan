import React, {useState} from 'react';
import datas from '../../../datas/datasTaipei/ElephantMountain/datasElephantMountain';
import images from '../../../datas/datasTaipei/ElephantMountain/images';

function ElephantMountain() {
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
		<div className='elephant-mountain'>
			<section className='elephant-mountain-hero'>
				<div className='elephant-mountain-hero-content'>
					<p className='elephant-mountain-kicker'>Randonnée</p>
					<h1 className='elephant-mountain-title'>{data.title}</h1>
					<p className='elephant-mountain-intro'>{data.text}</p>
				</div>
			</section>

			<section className='elephant-mountain-gallery'>
				<div className='elephant-mountain-carousel'>
					<button className='elephant-mountain-carousel-btn elephant-mountain-carousel-btn-prev' onClick={prevSlide} aria-label='Image précédente'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</button>

					<div className='elephant-mountain-carousel-viewport'>
						<div className='elephant-mountain-carousel-track' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
							{images.map((image, index) => (
								<div key={image.id} className='elephant-mountain-carousel-slide'>
									<img src={image.src} alt={`Elephant Mountain ${index + 1}`} className='elephant-mountain-carousel-img' />
								</div>
							))}
						</div>
					</div>

					<button className='elephant-mountain-carousel-btn elephant-mountain-carousel-btn-next' onClick={nextSlide} aria-label='Image suivante'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</button>
				</div>

				<div className='elephant-mountain-carousel-indicators'>
					{images.map((_, index) => (
						<button
							key={index}
							className={`elephant-mountain-carousel-indicator ${index === currentIndex ? 'is-active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Aller à l'image ${index + 1}`}
						/>
					))}
				</div>
			</section>

			<section className='elephant-mountain-content'>
				<div className='elephant-mountain-content-inner'>
					<p className='elephant-mountain-text'>{data.text2}</p>
				</div>
			</section>
		</div>
	);
}

export default ElephantMountain;




