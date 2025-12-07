import React from 'react';
import Link from 'next/link';
import datas from '../../datas/datasHeader/datasHeader';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-section'>
					<h3 className='footer-title'>Plan du site</h3>
					<nav className='footer-nav'>
						<Link href='/' className='footer-link'>
							Accueil
						</Link>
						{datas &&
							datas.map((section) => (
								<div key={section.title} className='footer-subsection'>
									<span className='footer-subtitle'>{section.title}</span>
									{section.subMenu &&
										section.subMenu.map((item) => (
											<Link key={item.href} href={item.href} className='footer-link footer-link-sub'>
												{item.label}
											</Link>
										))}
								</div>
							))}
					</nav>
				</div>

				<div className='footer-section'>
					<h3 className='footer-title'>Réseaux sociaux</h3>
					<div className='footer-social'>
						<a
							href='https://github.com/Alexandre-Saudemont'
							target='_blank'
							rel='noreferrer noopener'
							className='footer-social-link'
							aria-label='GitHub'>
							<img src='/images/github.svg' alt='' className='footer-social-icon' />
							<span>GitHub</span>
						</a>
						<a
							href='https://www.linkedin.com/in/alexandre-saudemont-535481239/'
							target='_blank'
							rel='noreferrer noopener'
							className='footer-social-link'
							aria-label='LinkedIn'>
							<img src='/images/linkedin.svg' alt='' className='footer-social-icon' />
							<span>LinkedIn</span>
						</a>
					</div>
				</div>

				<div className='footer-section footer-section-credits'>
					<p className='footer-credit'>
						Design & développement par <strong>As-WebDev</strong>
					</p>
					<a href='https://as-webdev.com' target='_blank' rel='noreferrer noopener' className='footer-portfolio-link'>
						Voir mon portfolio →
					</a>
				</div>
			</div>
			<div className='footer-copyright'>
				<p className='footer-copyright-text'>© {new Date().getFullYear()} As-WebDev. Tous droits réservés.</p>
			</div>
		</footer>
	);
}

export default Footer;
