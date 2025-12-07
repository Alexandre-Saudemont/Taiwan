import React from 'react';
import datas from '../../../datas/datasCuisine/datasCuisine';

function Cuisine() {
	const {soupe, omelette, dumpling} = datas;
	const dishes = [soupe, dumpling, omelette];

	return (
		<div className='cuisine'>
			<section className='cuisine-hero'>
				<div className='cuisine-hero-content'>
					<p className='cuisine-kicker'>Cuisine taïwanaise</p>
					<h1 className='cuisine-title'>La cuisine Taiwanaise - 台灣美食</h1>
					<p className='cuisine-intro'>
						La cuisine taïwanaise est un mélange unique de traditions culinaires chinoises, japonaises et autochtones. Découvrez les plats
						emblématiques qui font la renommée de cette île.
					</p>
				</div>
			</section>

			<section className='cuisine-dishes'>
				{dishes.map((dish, index) => {
					const isReversed = index % 2 !== 0;
					return (
						<article key={dish.title} className={`cuisine-dish ${isReversed ? 'is-reversed' : ''}`}>
							<div className='cuisine-dish-inner'>
								<div className='cuisine-dish-media'>
									<img src={dish.img} alt={dish.title} className='cuisine-dish-img' />
								</div>
								<div className='cuisine-dish-content'>
									<h2 className='cuisine-dish-title'>{dish.title}</h2>
									<p className='cuisine-dish-text'>{dish.text}</p>
								</div>
							</div>
						</article>
					);
				})}
			</section>
		</div>
	);
}

export default Cuisine;
