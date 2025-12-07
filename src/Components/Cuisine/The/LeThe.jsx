import React from 'react';
import datas from '../../../datas/datasThe/datasThe';

function LeThe() {
	const sections = [
		{
			image: datas.img1,
			alt: 'Thé Oolong taïwanais',
			kicker: 'Grands Crus',
			title: 'Les Oolong de Taïwan',
		},
	];

	return (
		<div className='le-the'>
			<section className='le-the-hero'>
				<div className='le-the-hero-inner'>
					<div className='le-the-hero-media'>
						<img src={datas.img} alt='Plantation de thé' className='le-the-hero-img' />
					</div>
					<div className='le-the-hero-content'>
						<p className='le-the-kicker'>Culture du thé</p>
						<h1 className='le-the-title'>{datas.title}</h1>
						<p className='le-the-intro'>{datas.text}</p>
					</div>
				</div>
			</section>

			<section className='le-the-sections'>
				{sections.map((section, index) => {
					if (!section.title && !section.text) return null;

					const isReversed = index % 2 !== 0;
					return (
						<article key={index} className={`le-the-section ${isReversed ? 'is-reversed' : ''}`}>
							<div className='le-the-section-inner'>
								<div className='le-the-section-media'>
									<img src={section.image} alt={section.alt} className='le-the-section-img' />
								</div>

								<div className='le-the-section-content'>
									<p className='le-the-section-kicker'>Grands Crus</p>
									<h2 className='le-the-section-title'>Les Oolong de Taïwan</h2>
									<p className='le-the-section-text'>{datas.text1}</p>
									<p className='le-the-section-text'>{datas.text2}</p>
								</div>
							</div>
						</article>
					);
				})}
			</section>
		</div>
	);
}

export default LeThe;
