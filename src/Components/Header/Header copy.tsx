import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

function Header() {
	// Code to trigger the modal to open or not using react useState
	// const [modalTaipei, setModalTaipei] = React.useState(false);
	// const [modalCuisine, setModalCuisine] = React.useState(false);
	const [openModal, setOpenModal] = React.useState(false);

	const data = [
		{
			title: 'Taipei',
			content1: 'Marché nocturne',
			content2: 'Marché de la prostitution',
		},
		{
			title: 'LA CUISINE',
			content1: 'MA BITE',
			content2: 'LA SAUCE',
		},
	];
	// function openSubMenuTaipei() {
	// 	modalCuisine && setModalCuisine(false);
	// 	setModalTaipei(true);
	// }
	// function closeSubMenuTaipei() {
	// 	setModalTaipei(false);
	// }

	// function openSubMenuCuisine() {
	// 	modalTaipei && setModalTaipei(false);
	// 	setModalCuisine(true);
	// }
	// function closeSubMenuCuisine() {
	// 	setModalCuisine(false);
	// }

	function openModalSubMenu() {
		setOpenModal(true);
	}

	function closeModalSubMenu() {
		setOpenModal(false);
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
				<ul className='header-ul' onMouseEnter={openModalSubMenu}>
					Taipei
					{/* Conditionnal condition, when the modal is triggered by the onMouseOver in the ul right above, it trigger
					the function openModal that setup the state to true, which make it show the modal   */}
					{openModal && (
						<div className='modal-submenu-navbar-container' onMouseEnter={openModalSubMenu} onMouseLeave={closeModalSubMenu}>
							<span>Taipei 101</span>
							<span>Marché nocturne</span>
							<span>Marché du poisson</span>
						</div>
					)}
				</ul>
				<ul className='header-ul' onMouseOver={openModalSubMenu}>
					La cuisine
					{openModal && (
						<div className='modal-submenu-navbar-container' onMouseEnter={openModalSubMenu} onMouseLeave={closeModalSubMenu}>
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
