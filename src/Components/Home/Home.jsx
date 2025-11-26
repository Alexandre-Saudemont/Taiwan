import React from 'react';
import datas from '../../datas/datasHome/datasHome.js';

function Home() {
	const {hero, sections} = datas;

	return (
		<div className='home'>
			<section className='home-hero'>
				<img className='home-hero-img' src={hero.image} alt={hero.alt} />
				<div className='home-hero-overlay' />
				<div className='home-hero-content'>
					<p className='home-hero-kicker'>{hero.tagline}</p>
					<h1>{hero.title}</h1>
					<p className='home-hero-text'>{hero.description}</p>
					<a className='home-hero-cta' href={`#${sections[0]?.slug || 'sections'}`}>
						{hero.cta}
					</a>
				</div>
			</section>

			<section className='home-sections' id='sections'>
				{sections.map((section, index) => {
					const isReversed = index % 2 !== 0;
					return (
						<article className={`home-section ${isReversed ? 'is-reversed' : ''}`} id={section.slug} key={section.slug}>
							<div className='home-section-inner'>
								<div className='home-section-media'>
									<img src={section.image} alt={section.alt} />
								</div>
								<div className='home-section-content'>
									<p className='home-section-kicker'>{section.kicker}</p>
									<h2 className='home-section-title'>{section.title}</h2>
									<p className='home-section-text'>{section.text}</p>
								</div>
							</div>
						</article>
					);
				})}
			</section>
		</div>
	);
}

export default Home;
