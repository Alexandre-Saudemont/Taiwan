import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Inscription from '../Components/Inscription/Inscription';
import Cuisine from '../Components/Cuisine/Cuisine';
// we import the data in order to have a dynamic direction bsed on the title of the element and the content
import datas from '../datas/datasHeader/datasHeader';
import TaipeiNight from '../Components/Taipei/TaipeiNight/TaipeiNight';
import TaipeiFish from '../Components/Taipei/TaipeiFish/TaipeiFish';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: `${datas[0].title}/${datas[0]?.subMenu[0]?.label}`,
				element: <TaipeiNight />,
			},
			{
				path: `${datas[0].title}/${datas[0].subMenu[1].label}`,
				element: <TaipeiFish />,
			},
			{
				path: `${datas[1].title}/${datas[1].subMenu[0].label}`,
				element: <Cuisine />,
			},
		],
	},
	{
		path: '/inscription',
		element: <Inscription />,
	},
]);

export default router;
