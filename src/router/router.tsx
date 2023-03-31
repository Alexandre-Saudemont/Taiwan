import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Inscription from '../Components/Inscription/Inscription';
import Taipei from '../Components/Taipei/Taipei';
import Cuisine from '../Components/Cuisine/Cuisine';
// we import the data in order to have a dynamic direction bsed on the title of the element and the content
import datas from '../datas/datas';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: `${datas[0].title}/${datas[0].content1}`,
				element: <Taipei />,
			},
			{
				path: `${datas[0].title}/${datas[0].content2}`,
				element: <Taipei />,
			},
		],
	},
	{
		path: '/inscription',
		element: <Inscription />,
	},

	{
		path: 'La cuisine',
		element: <Cuisine />,
	},
]);

export default router;
