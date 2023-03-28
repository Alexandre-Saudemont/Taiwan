//defining and exporting an "array" for submenu items containing a title and a link
export type SubMenuItem = {
	title: string;
	link: string;
};

//defining and exporting an "array" for menu items containing a title and a submenu object ref above
export type MenuItem = {
	title: string;
	submenu?: SubMenuItem[];
};

//defining and exporting the function that will create the html elements for the menu
export function appendMenu(menuItems: MenuItem[]): DocumentFragment {
	//fragment is a html part not the whole html dom, it avoid the <div> before etc..
	const menuFragment = new DocumentFragment();
	//to check which submenu is open
	let currentOpenSubMenu: HTMLElement | null = null;

	//the function to open the submenu
	const openSubMenu = (submenuContainer: HTMLElement) => {
		//if there is a submenu open, close it
		if (currentOpenSubMenu) {
			closeSubMenu(currentOpenSubMenu);
		}
		//then reopen the submenu or reopen the same
		submenuContainer.style.display = 'block'; //display the div submenu
		currentOpenSubMenu = submenuContainer;
	};

	//the function to close the submenu
	const closeSubMenu = (submenuContainer: HTMLElement) => {
		submenuContainer.style.display = 'none'; //hide the div submenu
	};

	//looping through the menu items
	menuItems.forEach((menuItem) => {
		//creating the first ul
		const ul = document.createElement('ul');
		ul.className = 'header-ul';
		ul.textContent = menuItem.title; //adding the title to the ul content <ul>title...

		//creating the submenu container div | <ul>title <div>submenu ...
		const submenuContainer = document.createElement('div');
		submenuContainer.className = 'modal-submenu-navbar-container';
		submenuContainer.style.display = 'none'; //hide the div submenu by default

		//adding the event listener to the ul | <ul onmouseenter=.... >title <div>submenu ...
		ul.onmouseenter = () => {
			if (menuItem.submenu) {
				openSubMenu(submenuContainer);
			}
		};

		//adding the <ul>title <div>submenu ... to the fragment | <ul>.....</ul> <ul>.....</ul> <ul>.....</ul>
		menuFragment.appendChild(ul);

		//looping through the submenu items
		if (menuItem.submenu && menuItem.submenu.length > 0) {
			menuItem.submenu.forEach((submenuItem) => {
				//creating the span for the submenu item | <ul>title <div>submenu <span>submenu item ...
				const span = document.createElement('span');
				span.textContent = submenuItem.title; //adding the title to the span content <span>title ...
				submenuContainer.appendChild(span); //adding the <span>title ... to the submenu container <div>submenu ...
			});
			ul.appendChild(submenuContainer);
			submenuContainer.onmouseenter = () => openSubMenu(submenuContainer);
			submenuContainer.onmouseleave = () => closeSubMenu(submenuContainer);
		}
	});

	return menuFragment;
}
