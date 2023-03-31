import React, {useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.scss';
import datas from '../../datas/datas';
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
	function navigation(title: string, content1: any, navigate: any) {
		navigate(`/${title}/${content1}`);
	}

	function navigation2(title: any, content2: any, navigate: any) {
		navigate(`/${title}/${content2}`);
	}

	return (
		<div className='header-container'>
			<nav className='header-nav'>
				<ul className='header-nav-title'>
					{/* We map into our data, this way we can have dynamic content. If we want more title or more subMenu, we can just add them in our array of object "datas" */}
					{datas.map((data, index) => (
						// In react every generated element must have a key, so we add it to the div
						<div key={index}>
							<li onMouseEnter={() => openModalSubMenu(data.title)}>{data.title}</li>
							{/* we stock the title of the hovered element in the state "hoverTitle" so when we pass the mouse over the element, 
							we can compare the title of the hovered element with the title of the element in the state "hoverTitle" and if they are the same, we display the modal */}
							{hoverTitle === data.title && (
								<div
									className='modal-submenu-navbar-container'
									onMouseEnter={() => openModalSubMenu(data.title)}
									onMouseLeave={closeModalSubMenu}>
									<span className='header-submenu-span' onClick={() => navigation(data.title, data.content1, navigate)}>
										{data.content1}
									</span>
									<span className='header-submenu-span' onClick={() => navigation(data.title, data.content2, navigate)}>
										{data.content2}
									</span>
								</div>
							)}
						</div>
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
