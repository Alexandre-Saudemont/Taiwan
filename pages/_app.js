import '../styles/globals.scss';
import '../src/Components/Header/Header.scss';
import '../src/Components/Footer/Footer.scss';
import '../src/Components/Home/Home.scss';
import '../src/Components/Visa/Visa.scss';
import '../src/Components/Cuisine/Cuisine/Cuisine.scss';
import '../src/Components/Cuisine/The/LeThe.scss';
import '../src/Components/Dish/Dish.scss';
import '../src/Components/Dish/DishReverse.scss';
import '../src/Components/Taipei/TaipeiNight/TaipeiNight.scss';
import '../src/Components/Taipei/TaipeiFish/TaipeiFish.scss';
import '../src/Components/Taipei/ElephantMountain/ElephantMountain.scss';
import '../src/Components/Taipei/Jiufen/Jiufen.scss';

import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';

function App({Component, pageProps}) {
	return (
		<div className='App'>
			<Header />
			<main className='page-shell'>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}

export default App;

