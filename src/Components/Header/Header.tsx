import './Header.scss';
//importing out compoenent
import NavigationComponent from './NavigationComponent';

function Header() {
	//using react JSX to render out our component so we don't have dumb error cause react
	return (
		<div className='header-container'>
			<NavigationComponent />
		</div>
	);
}

export default Header;
