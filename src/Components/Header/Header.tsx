import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

function Header() {
	// Code to trigger the modal to open or not using react useState
	const [modalTaipei, setModalTaipei] = React.useState(false);

	function openModal() {
		setModalTaipei(true);
	}

	function closeModal() {
		setModalTaipei(false);
	}

	// Style for the Modal, if I only code it in CSS, the modal doesn't keep the style. That's the way I found to keep it styled
	const modalStyle: React.CSSProperties = {
		position: 'fixed',
		left: 0,
		backgroundColor: '#fff',
		zIndex: 1,
		width: '80%',
	};

	return (
		<div className='header-container'>
			<nav className='header-nav'>
				<ul className='header-ul' onClick={openModal}>
					Taipei
					{/* Conditionnal condition, when the modal is triggered by the onMouseOver in the ul right above, it trigger
					the function openModal that setup the state to true, which make it show the modal   */}
					{modalTaipei && (
						<div className='modal-taipei-container'>
							<span>Taipei 101</span>
							<span> Marché nocturne</span>
							<span>Marché du poisson</span>
						</div>
					)}
				</ul>

				<ul className='header-ul'>La cuisine</ul>
				<ul className='header-ul'>Infos Visa</ul>
				<ul className='header-ul'>Se connecter</ul>

				<NavLink className='header-navlink' to='/inscription'>
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
