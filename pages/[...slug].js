import TaipeiNight from '../src/Components/Taipei/TaipeiNight/TaipeiNight';
import TaipeiFish from '../src/Components/Taipei/TaipeiFish/TaipeiFish';
import ElephantMountain from '../src/Components/Taipei/ElephantMountain/ElephantMountain';
import Jiufen from '../src/Components/Taipei/Jiufen/Jiufen';
import Cuisine from '../src/Components/Cuisine/Cuisine/Cuisine';
import LeThe from '../src/Components/Cuisine/The/LeThe';
import Visa from '../src/Components/Visa/Visa';

const componentMap = {
	'/Taipei/Le-Marché-Nocturne': TaipeiNight,
	'/Taipei/Le-Marché-du-Poisson': TaipeiFish,
	'/Taipei/Elephant-Mountain': ElephantMountain,
	'/Taipei/Jiufen': Jiufen,
	'/La-Cuisine/La-Cuisine-Taiwanaise': Cuisine,
	'/Nature/Le-Thé': LeThe,
	'/Info-Visa/Information-concernant-les-visas': Visa,
};

function DynamicPage({slugPath}) {
	const PageComponent = componentMap[slugPath];

	if (!PageComponent) {
		return null;
	}

	return <PageComponent />;
}

export async function getStaticPaths() {
	const paths = Object.keys(componentMap).map((fullPath) => ({
		params: {slug: fullPath.split('/').filter(Boolean)},
	}));

	return {
		paths,
		fallback: false,
	};
}

export function getStaticProps({params}) {
	const slugPath = `/${params.slug.join('/')}`;
	return {
		props: {
			slugPath,
		},
	};
}

export default DynamicPage;
