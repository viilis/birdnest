import { XMLParser } from 'fast-xml-parser';

export const parser = (data: any) => {
	const parser = new XMLParser();
	return parser.parse(data);
};
