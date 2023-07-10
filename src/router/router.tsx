import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
// we import the data in order to have a dynamic direction based on the title of the element and the content
import datas from '../datas/datasHeader/datasHeader';
import Cuisine from '../Components/Cuisine/Cuisine/Cuisine';
import TaipeiNight from '../Components/Taipei/TaipeiNight/TaipeiNight';
import TaipeiFish from '../Components/Taipei/TaipeiFish/TaipeiFish';
import LeThe from '../Components/Cuisine/The/LeThe';
import Visa from '../Components/Visa/Visa';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: `/${datas[0].subMenu[0].href}`,
				element: <TaipeiNight />,
			},
			{
				path: `/${datas[0].subMenu[1].href}`,
				element: <TaipeiFish />,
			},
			{
				path: `/${datas[1].subMenu[0].href}`,
				element: <Cuisine />,
			},
			{
				path: `/${datas[1].subMenu[1].href}`,
				element: <LeThe />,
			},
			{
				path: `${datas[2].subMenu[0].href}`,
				element: <Visa />,
			},
		],
	},
]);

export default router;
