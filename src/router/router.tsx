import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Inscription from '../Components/Inscription/Inscription';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/inscription',
		element: <Inscription />,
	},
]);

export default router;
