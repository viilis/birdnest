import { pilotSchema, serialNumberSchema } from '$lib/schemas';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const baseUrl = 'https://assignments.reaktor.com/birdnest/pilots/';
	const serialNumber = url.searchParams.get('serialNumber');

	if (!serialNumber) {
		return new Response('No serial number specified', {
			status: 403,
		});
	}

	const serialNumberValidation = serialNumberSchema.validate(serialNumber);

	if (serialNumberValidation.error) {
		return new Response(serialNumberValidation.error.message, {
			status: 403,
		});
	}

	const res = await fetch(baseUrl + serialNumberValidation.value);

	if (!res.ok) {
		return new Response('Could not fetch pilot data', {
			status: 503,
		});
	}

	const pilotDataValidation = pilotSchema.validate(await res.json());

	if (pilotDataValidation.error) {
		return new Response(pilotDataValidation.error.message, {
			status: 500,
		});
	}

	return new Response(JSON.stringify({ data: pilotDataValidation.value }), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
