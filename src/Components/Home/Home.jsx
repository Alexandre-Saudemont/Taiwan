import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import datas from '../../datas/datasHome/datasHome.js';

function Home() {
	const {hero, sections} = datas;
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function checkMobile() {
			setIsMobile(window.innerWidth <= 720);
		}
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<div className='home'>
			<section className='home-hero'>
				<img className='home-hero-img' src={hero.image} alt={hero.alt} />
				{!isMobile && <div className='home-hero-overlay' />}
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
						<Link key={section.slug} href={section.href} className={`home-section ${isReversed ? 'is-reversed' : ''}`} id={section.slug}>
							<div className='home-section-inner'>
								<div className='home-section-media'>
									<img src={section.image} alt={section.alt} />
								</div>
								<div className='home-section-content'>
									<p className='home-section-kicker'>{section.kicker}</p>
									<h2 className='home-section-title'>{section.title}</h2>
									<p className='home-section-text'>{section.text}</p>
									<span className='home-section-link'>Découvrir →</span>
								</div>
							</div>
						</Link>
					);
				})}
			</section>
		</div>
	);
}

export default Home;
