import { droneReportSchema } from '$lib/schemas';
import { XMLParser } from 'fast-xml-parser';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://assignments.reaktor.com/birdnest/drones';
	const xmlParserOptions = {
		ignoreAttributes: false,
		attributeNamePrefix: 'attr_',
		ignoreDeclaration: true,
	};

	const res = await fetch(baseUrl);

	if (!res.ok) {
		return new Response('Could not fetch drone data', {
			status: 503,
		});
	}

	// fast-xml-parser
	const parsedResult = new XMLParser(xmlParserOptions).parse(await res.text());

	const { error, value } = droneReportSchema.validate(parsedResult);

	if (error) {
		return new Response(error.message, {
			status: 500,
		});
	}

	return new Response(JSON.stringify({ data: value }), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
