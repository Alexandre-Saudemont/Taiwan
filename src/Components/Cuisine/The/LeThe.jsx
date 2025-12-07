import React from 'react';
import datas from '../../../datas/datasThe/datasThe';

function LeThe() {
	const sections = [
		{
			image: datas.img1,
			alt: 'Thé Oolong taïwanais',
			kicker: 'Grands Crus',
			title: 'Les Oolong de Taïwan',
			text: `L'île de Taïwan est réputée pour ses Oolong de grande qualité. On y trouve aussi bien des Oolong faiblement oxydés comme le Bao Zhong, mais aussi des thés d'oxydation intermédiaire et roulés en perles comme le Ding Dong et des thés d'oxydation forte comme le Butterfly of Taïwan.`,
			text2: `On trouve également quelques Grands Crus exceptionnels venus des hautes montagnes (Gao Shan Cha) comme le Shan Li Xi Gao Shan Cha, un Grand Cru aux notes à la fois florales et gourmandes. Enfin, à Taïwan, on trouve également de très beaux thés noirs capables de rivaliser avec les plus beaux Grands Crus de Chine continentale. Un exemple : le Mi Xiang Hong Cha, un Grand Cru d'une belle complexité qui offre un bouquet de notes florales et miellées.`,
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
									{section.kicker && <p className='le-the-section-kicker'>{section.kicker}</p>}
									{section.title && <h2 className='le-the-section-title'>{section.title}</h2>}
									<p className='le-the-section-text'>{section.text}</p>
									{section.text2 && <p className='le-the-section-text'>{section.text2}</p>}
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
