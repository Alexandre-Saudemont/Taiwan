import './Cuisine.scss';
import datas from '../../datas/datasCuisine/datasCuisine';
import Dish from '../../datas/datasCuisine/Dish';

function Cuisine() {
	return (
		<div className='cuisine-container'>
			<Dish dish={datas.soupe} />
			<Dish dish={datas.omelette} />
			<Dish dish={datas.dumpling} />
		</div>
	);
}

export default Cuisine;
