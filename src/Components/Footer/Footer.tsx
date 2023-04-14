import React from 'react';
import './Footer.scss';
import github from '/images/github.svg';
import linkedin from './images/linkedin.svg';

function Footer() {
	return (
		<div className='footer-container'>
			<a href='https://github.com/Alexandre-Saudemont' target='_blank' rel='noreferrer'>
				<span>
					<img src={github} alt='github icon' className='footer-github' />
				</span>
			</a>

			<p>Design par Alexandre Saudemont. 🐔</p>
			<p>Copyright© 2023 Alexandre Saudemont. All Rights Reserved.</p>

			<a href='https://www.linkedin.com/in/alexandre-saudemont-535481239/' target='_blank' rel='noreferrer'>
				<span>
					<img src={linkedin} alt='linkedin icon' className='footer-linkedin' />
				</span>
			</a>
		</div>
	);
}

export default Footer;
