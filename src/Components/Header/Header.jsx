import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import datas from '../../datas/datasHeader/datasHeader';

function Header() {
	const [hoverTitle, setHoverTitle] = React.useState(null);
	const router = useRouter();

	function openDropdown(title) {
		setHoverTitle(title);
	}

	function closeDropdown() {
		setHoverTitle(null);
	}

	function handleBlur(event) {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			closeDropdown();
		}
	}

	function navigateTo(href) {
		router.push(href);
		closeDropdown();
	}

	return (
		<header className='header-shell'>
			<div className='header-floating'>
				<Link className='header-logo' href='/'>
					Accueil
				</Link>
				<nav className='header-nav'>
					<ul className='header-nav-list'>
						{datas.map((data) => (
							<li
								key={data.title}
								className='header-nav-item'
								onMouseEnter={() => openDropdown(data.title)}
								onFocus={() => openDropdown(data.title)}
								onBlur={handleBlur}>
								<button type='button' className='header-nav-trigger' aria-expanded={hoverTitle === data.title} aria-haspopup='true'>
									{data.title}
								</button>
								{hoverTitle === data.title && (
									<div
										className='header-dropdown'
										onMouseEnter={() => openDropdown(data.title)}
										onMouseLeave={closeDropdown}
										onFocus={() => openDropdown(data.title)}
										onBlur={handleBlur}>
										{data?.subMenu?.map((subMenu) => (
											<button
												key={subMenu.href}
												type='button'
												className='header-dropdown-item'
												onClick={() => navigateTo(subMenu.href)}>
												<span>{subMenu.label}</span>
											</button>
										))}
									</div>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
