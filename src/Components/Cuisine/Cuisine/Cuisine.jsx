import datas from '../../../datas/datasCuisine/datasCuisine';
import Dish from '../../Dish/Dish';
import DishReverse from '../../Dish/DishReserve';

function Cuisine() {
	const {soupe, omelette, dumpling} = datas;
	return (
		<div className='cuisine-container'>
			<Dish dish={soupe} />
			<DishReverse dish={omelette} />
			<Dish dish={dumpling} />
		</div>
	);
}

export default Cuisine;
