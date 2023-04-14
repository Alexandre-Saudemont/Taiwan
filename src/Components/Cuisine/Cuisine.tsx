import React from 'react';
import './Cuisine.scss';
import {dataSoupe, dataOmelette, dataDumpling} from '../../datas/datasCuisine/datasCuisine';
import SoupeComponent from '../../datas/datasCuisine/SoupeComponent';

function Cuisine() {
	return (
		<div className='cuisine-container'>
			<SoupeComponent {...dataSoupe} />
		</div>
	);
}

export default Cuisine;
