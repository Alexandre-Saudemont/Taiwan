import React from 'react';
import './Visa.scss';
import passport from '../../asset/images/passport.jpg';

function Visa() {
	return (
		<div className='visa'>
			<h1 className='visa-title'>Visa et formalités</h1>
			<img src={passport} className='visa-img' alt='french passport' />
			<article className='visa-article'>
				Le visa n’est pas obligatoire pour un séjour de moins de 90 jours de ressortissant français. Dans tous les cas, la durée restante de
				la validité du passeport doit être supérieure à 6 mois à la date d’entrée sur le territoire, et il faut pouvoir justifier d’un billet
				retour (ou vers un pays tiers avec visa valide), faute de quoi l’interdiction d’entrée sur le territoire est systématique.
			</article>
			<article className='visa-article'>
				Pour tout renseignement concernant les visas, veuillez contacter le
				<a href='https://www.roc-taiwan.org/fr_fr/index.html' target='_blank' rel='noreferrer'>
					{' '}
					Bureau de représentation de Taipei en France
				</a>
			</article>
		</div>
	);
}

export default Visa;
