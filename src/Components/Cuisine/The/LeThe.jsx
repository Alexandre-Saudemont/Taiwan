import React from 'react';
import datas from '../../../datas/datasThe/datasThe';

function LeThe() {
	return (
		<div className='le-the'>
			<section className='le-the-hero'>
				<div className='le-the-hero-content'>
					<p className='le-the-kicker'>Culture du thé</p>
					<h1 className='le-the-title'>{datas.title}</h1>
					<p className='le-the-intro'>{datas.text}</p>
				</div>
			</section>

			<section className='le-the-section'>
				<div className='le-the-section-media'>
					<img src={datas.img} alt='Plantation de thé taïwanaise' className='le-the-section-img' />
				</div>
				<div className='le-the-section-content'>
					<p className='le-the-section-text'>{datas.text1}</p>
				</div>
			</section>

			<section className='le-the-section le-the-section-reverse'>
				<div className='le-the-section-media'>
					<img src={datas.img1} alt='Thé Oolong taïwanais' className='le-the-section-img' />
				</div>
				<div className='le-the-section-content'>
					<p className='le-the-section-kicker'>Grands Crus</p>
					<h2 className='le-the-section-title'>Les Oolong de Taïwan</h2>
					<p className='le-the-section-text'>
						L'île de Taïwan est réputée pour ses Oolong de grande qualité. On y trouve aussi bien des Oolong faiblement oxydés comme le Bao Zhong, mais aussi des thés d'oxydation intermédiaire et roulés en perles comme le Ding Dong et des thés d'oxydation forte comme le Butterfly of Taïwan.
					</p>
					<p className='le-the-section-text'>
						On trouve également quelques Grands Crus exceptionnels venus des hautes montagnes (Gao Shan Cha) comme le Shan Li Xi Gao Shan Cha, un Grand Cru aux notes à la fois florales et gourmandes. Enfin, à Taïwan, on trouve également de très beaux thés noirs capables de rivaliser avec les plus beaux Grands Crus de Chine continentale. Un exemple : le Mi Xiang Hong Cha, un Grand Cru d'une belle complexité qui offre un bouquet de notes florales et miellées.
					</p>
				</div>
			</section>
		</div>
	);
}

export default LeThe;
