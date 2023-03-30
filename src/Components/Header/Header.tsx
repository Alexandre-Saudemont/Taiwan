import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

function Header() {
	// Code to trigger the modal to open or not using react useState
	// const [modalTaipei, setModalTaipei] = React.useState(false);
	// const [modalCuisine, setModalCuisine] = React.useState(false);
	const [openModal, setOpenModal] = React.useState(null);

	// interface Datas {
	// 	title: string,
	// 	content1: string,
	// 	content2: string,
	// }
	const datas = [
		{
			title: 'Taipei',
			content1: 'Le Marché nocturne',
			content2: 'Le Marché du poisson',
		},
		{
			title: 'La Cuisine',
			content1: 'La soupe de nouille au boeuf - 牛肉麵',
			content2: 'Le thé - 茶',
		},
	];
	console.log('marché nuit', datas[0].content1, 'la soupe o choux', datas[1].content1);

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

	function openModalSubMenu(title: any) {
		setOpenModal(title);
	}

	function closeModalSubMenu() {
		setOpenModal(null);
	}
	// Style for the Modal, if I only code it in CSS, the modal doesn't keep the style. That's the way I found to keep it styled
	// const modalStyle: React.CSSProperties = {
	// 	position: 'fixed',
	// 	left: 0,
	// 	backgroundColor: '#fff',
	// 	zIndex: 1,
	// 	width: '80%',
	// };
	useEffect(() => {}, []);

	return (
		<div className='header-container'>
			<nav className='header-nav'>
				<ul className='header-nav-title'>
					{datas.map((data, index) => (
						<div key={index}>
							<li onMouseEnter={() => openModalSubMenu(data.title)}>{data.title}</li>
							{openModal === data.title && (
								<div
									className='modal-submenu-navbar-container'
									onMouseEnter={() => openModalSubMenu(data.title)}
									onMouseLeave={closeModalSubMenu}>
									<span>{data.content1}</span>
									<span>{data.content2}</span>
								</div>
							)}
						</div>
					))}
				</ul>

				{/* <NavLink className='header-nav' to='/inscription'>
					Rejoignez-nous
					<div className='inscription-container'>
						<form action='submit' className='inscription-form'>
							<label htmlFor='Email'>
								Email
								<input type='email' name='email' placeholder='VotreEmail@exemple.com' className='inscription-input' />
							</label>
						</form>
					</div>
				</NavLink> */}
			</nav>
		</div>
	);
}

export default Header;
