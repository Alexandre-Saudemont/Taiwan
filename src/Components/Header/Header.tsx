import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.scss';
import datas from '../../datas/datasHeader/datasHeader';

function Header() {
	// Code to trigger the modal to open or not using react useState
	const [hoverTitle, setHoverTitle] = React.useState(null);
	const navigate = useNavigate();

	function openModalSubMenu(title: any) {
		setHoverTitle(title);
	}
	function closeModalSubMenu() {
		setHoverTitle(null);
	}
	// Code to navigate to the page of the hovered element
	function navigation(title: string, label: any, navigate: any) {
		navigate(`/${title}/${label}`);
	}

	return (
		<div className='header-container'>
			<nav className='header-nav'>
				<ul className='header-nav-title'>
					<NavLink to='/'>Home</NavLink>
					{/* We map into our data, this way we can have dynamic content. If we want more title or more subMenu, we can just add them in our array of object "datas" */}
					{datas.map((data, index) => (
						// In react every generated element must have a key, so we add it to React Fragment
						// Using React Fragment simplifies the code structure by avoiding the need for unnecessary elements in the DOM. Additionally,
						// by avoiding the creation of an extra element in the DOM, it can also improve the performance of the application.
						<React.Fragment key={index}>
							<li onMouseEnter={() => openModalSubMenu(data.title)}>{data.title}</li>
							{/* we stock the title of the hovered element in the state "hoverTitle" so when we pass the mouse over the element, 
							we can compare the title of the hovered element with the title of the element in the state "hoverTitle" and if they are the same, we display the modal */}
							{hoverTitle === data.title && (
								<div
									className='modal-submenu-navbar-container'
									onMouseEnter={() => openModalSubMenu(data.title)}
									onMouseLeave={closeModalSubMenu}>
									{/* We map into the subMenu of the hovered element to display the subMenu */}
									{data?.subMenu?.map((subMenu, index) => (
										<React.Fragment key={index}>
											{/* Every span are created dynamically based on our data */}
											<span className='header-submenu-span' onClick={() => navigation(data.title, subMenu.label, navigate)}>
												{subMenu.label}
											</span>
										</React.Fragment>
									))}
								</div>
							)}
						</React.Fragment>
					))}
				</ul>

				<NavLink className='header-nav' to='/inscription'>
					Rejoignez-nous
				</NavLink>
			</nav>
		</div>
	);
}

export default Header;
