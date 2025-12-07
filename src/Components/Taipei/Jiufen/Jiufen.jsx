import React, {useState} from 'react';
import datas from '../../../datas/datasTaipei/Jiufen/datasJiufen';
import images from '../../../datas/datasTaipei/Jiufen/images';

function Jiufen() {
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
		<div className='jiufen'>
			<section className='jiufen-hero'>
				<div className='jiufen-hero-content'>
					<p className='jiufen-kicker'>Village historique</p>
					<h1 className='jiufen-title'>{data.title}</h1>
					<p className='jiufen-intro'>{data.text}</p>
				</div>
			</section>

			<section className='jiufen-gallery'>
				<div className='jiufen-carousel'>
					<button className='jiufen-carousel-btn jiufen-carousel-btn-prev' onClick={prevSlide} aria-label='Image précédente'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</button>

					<div className='jiufen-carousel-viewport'>
						<div className='jiufen-carousel-track' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
							{images.map((image, index) => (
								<div key={image.id} className='jiufen-carousel-slide'>
									<img src={image.src} alt={`Jiufen ${index + 1}`} className='jiufen-carousel-img' />
								</div>
							))}
						</div>
					</div>

					<button className='jiufen-carousel-btn jiufen-carousel-btn-next' onClick={nextSlide} aria-label='Image suivante'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</button>
				</div>

				<div className='jiufen-carousel-indicators'>
					{images.map((_, index) => (
						<button
							key={index}
							className={`jiufen-carousel-indicator ${index === currentIndex ? 'is-active' : ''}`}
							onClick={() => goToSlide(index)}
							aria-label={`Aller à l'image ${index + 1}`}
						/>
					))}
				</div>
			</section>

			<section className='jiufen-content'>
				<div className='jiufen-content-inner'>
					<p className='jiufen-text'>{data.text2}</p>
				</div>
			</section>
		</div>
	);
}

export default Jiufen;



