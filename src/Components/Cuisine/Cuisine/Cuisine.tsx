import './Cuisine.scss';
import datas from '../../../datas/datasCuisine/datasCuisine';
import Dish from '../../../datas/datasCuisine/Dish';
import DishReverse from '../../../datas/datasCuisine/DishReserve';

function Cuisine() {
	return (
		<div className='cuisine-container'>
			<Dish dish={datas.soupe} />
			<DishReverse dish={datas.omelette} />
			<Dish dish={datas.dumpling} />
		</div>
	);
}

export default Cuisine;
