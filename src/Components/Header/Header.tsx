import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

function Header() {
	// Code to trigger the modal to open or not using react useState
	const [modalTaipei, setModalTaipei] = React.useState(false);
	const [modalCuisine, setModalCuisine] = React.useState(false);

	function openSubMenuTaipei() {
		setModalTaipei(true);
	}
	function closeSubMenuTaipei() {
		setModalTaipei(false);
	}

	function openSubMenuCuisine() {
		setModalCuisine(true);
	}
	function closeSubMenuCuisine() {
		setModalCuisine(false);
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
				<ul className='header-ul' onMouseEnter={openSubMenuTaipei}>
					Taipei
					{/* Conditionnal condition, when the modal is triggered by the onMouseOver in the ul right above, it trigger
					the function openModal that setup the state to true, which make it show the modal   */}
					{modalTaipei && (
						<div className='modal-submenu-navbar-container' onMouseEnter={openSubMenuTaipei} onMouseLeave={closeSubMenuTaipei}>
							<span>Taipei 101</span>
							<span> Marché nocturne</span>
							<span>Marché du poisson</span>
						</div>
					)}
				</ul>
				<ul className='header-ul' onMouseOver={openSubMenuCuisine}>
					La cuisine
					{modalCuisine && (
						<div className='modal-submenu-navbar-container' onMouseEnter={openSubMenuCuisine} onMouseLeave={closeSubMenuCuisine}>
							<span>La soupe de nouille au boeuf - 牛肉麵</span>
							<span>Le thé - 茶</span>
						</div>
					)}
				</ul>

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
