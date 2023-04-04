import './Home.scss';
import taiwanHome from '../../asset/images/taiwanHome.jpg';

function Home() {
	return (
		<div className='home-container'>
			<img className='home-img' src={taiwanHome} alt='paysage-taiwan' />
		</div>
	);
}

export default Home;
