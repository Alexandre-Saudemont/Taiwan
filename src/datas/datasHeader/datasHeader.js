import {useHref} from 'react-router-dom';

const datas = [
	{
		title: 'Taipei',
		subMenu: [
			{
				label: 'Le Marché nocturne - 華西夜市',
				href: '/Taipei/Le-Marché-Nocturne',
			},
			{
				label: 'Le Marché du poisson - 台北魚市場',
				href: '/Taipei/Le-Marché-du-Poisson',
			},
		],
	},
	{
		title: 'La Cuisine',
		subMenu: [
			{
				label: 'La cuisine Taiwanaise - 台灣美食',
				href: '/La-Cuisine/La-Cuisine-Taiwanaise',
			},
			{
				label: 'Le thé - 茶',
				href: '/La-Cuisine/Le-Thé',
			},
		],
	},
	{
		title: 'Info Visa',
		subMenu: [
			{
				label: 'Information concernant les visas - 簽證信息',
				href: '/Info-Visa/Information-concernant-les-visas',
			},
		],
	},
];

export default datas;
