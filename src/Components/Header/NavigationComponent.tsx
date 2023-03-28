import React, {useState} from 'react';
//importing our script file
import {MenuItem} from './Navigation';

//defining our menu items using the export array in the Navigation.ts
const menuItems: MenuItem[] = [
	{
		// a menu is an array with a title and a submenu array
		title: 'Taipei',
		submenu: [
			// a submenu is an array of title and link
			{title: 'Taipei 101', link: ''},
			{title: 'Marché nocturne', link: ''},
			{title: 'Marché du poisson', link: ''},
		],
	},
	{
		title: 'La cuisine',
		submenu: [
			{title: 'La soupe de nouille au boeuf - 牛肉麵', link: ''},
			{title: 'Le thé - 茶', link: ''},
		],
	},
];

//defining our component
const NavigationComponent = () => {
	const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

	return (
		<nav className='header-nav'>
			{/* mapping our menu items array to display the title of each menu item | mapping is to set value to a key like this item is the first one so it's Taipei etc...*/}
			{menuItems.map(
				(
					menuItem,
					index, // simple loop to display item.
				) => (
					<ul key={index} className='header-ul' onMouseEnter={() => setOpenSubMenuIndex(index)}>
						{menuItem.title}
						{openSubMenuIndex === index && menuItem.submenu && (
							<div className='modal-submenu-navbar-container' onMouseLeave={() => setOpenSubMenuIndex(null)}>
								{menuItem.submenu.map((submenuItem, subIndex) => (
									<span key={subIndex}>{submenuItem.title}</span>
								))}
							</div>
						)}
					</ul>
				),
			)}
		</nav>
	);
};

export default NavigationComponent;
