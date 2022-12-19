import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const response = await fetch('http://assignments.reaktor.com/birdnest/drones');
		return response;
	} catch (error) {
		console.error(error);
	}
};
