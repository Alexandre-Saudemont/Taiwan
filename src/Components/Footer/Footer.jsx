import React from 'react';
function Footer() {
	return (
		<div className='footer-container'>
			<a href='https://github.com/Alexandre-Saudemont' target='_blank' rel='noreferrer'>
				<span>
					<img src='/images/github.svg' alt='github icon' className='footer-github' />
				</span>
			</a>
			<p className='footer-text'>Design par Alexandre Saudemont. 🐔</p>
			<a href='https://www.linkedin.com/in/alexandre-saudemont-535481239/' target='_blank' rel='noreferrer'>
				<span>
					<img src='/images/linkedin.svg' alt='linkedin icon' className='footer-linkedin' />
				</span>
			</a>
		</div>
	);
}

export default Footer;
