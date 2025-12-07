import React from 'react';

function Visa() {
	return (
		<div className='visa'>
			<section className='visa-hero'>
				<div className='visa-hero-inner'>
					<div className='visa-hero-media'>
						<img src='/images/passport.jpg' alt='Passeport français' className='visa-hero-img' />
					</div>
					<div className='visa-hero-content'>
						<p className='visa-kicker'>Formalités</p>
						<h1 className='visa-title'>Visa et formalités</h1>
						<p className='visa-intro'>
							Informations essentielles pour préparer votre voyage à Taïwan. Découvrez les conditions d'entrée et les formalités nécessaires
							pour les ressortissants français.
						</p>
					</div>
				</div>
			</section>

			<section className='visa-content-section'>
				<div className='visa-content-card'>
					<div className='visa-content-inner'>
						<article className='visa-article'>
							<p className='visa-article-text'>
								Le visa n'est pas obligatoire pour un séjour de moins de 90 jours pour les ressortissants français. Dans tous les cas,
								la durée restante de la validité du passeport doit être supérieure à 6 mois à la date d'entrée sur le territoire, et
								il faut pouvoir justifier d'un billet retour (ou vers un pays tiers avec visa valide), faute de quoi l'interdiction
								d'entrée sur le territoire est systématique.
							</p>
						</article>
						<article className='visa-article'>
							<p className='visa-article-text'>
								Pour tout renseignement concernant les visas, veuillez contacter le{' '}
								<a href='https://www.roc-taiwan.org/fr_fr/index.html' target='_blank' rel='noreferrer noopener' className='visa-link'>
									Bureau de représentation de Taipei en France
								</a>
							</p>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Visa;
