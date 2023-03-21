import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

function Header() {
	const [burgerMenu, setBurgerMenu] = React.useState(false);

	const [modalInscription, setModalInscription] = React.useState(false);

	function openModal() {
		setModalInscription(true);
	}

	function closeModal() {
		setModalInscription(false);
	}

	return (
		<div className='header-container'>
			<nav className='header-nav'>
				<ul className='header-ul'>Taipei</ul>
				<ul className='header-ul'>La cuisine</ul>
				<ul className='header-ul'>Infos Visa</ul>
				<ul className='header-ul'>Se connecter</ul>

				<NavLink className='header-navlink' to='/inscription' onMouseOver={openModal} onMouseOut={closeModal}>
					Rejoignez-nous
					{/* {modalInscription && (
						<div className='inscription-container'>
							<form action='submit' className='inscription-form'>
								<label htmlFor='Email'>
									Email
									<input type='email' name='email' placeholder='VotreEmail@exemple.com' className='inscription-input' />
								</label>
							</form>
						</div>
					)} */}
				</NavLink>
			</nav>
		</div>
	);
}

export default Header;
