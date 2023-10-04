export interface Project {
	id: string;
	name: string;
	description: string;
	image: string;
	url?: string;
	github?: string;
	types: string[];
}

export const projects: Project[] = [
	{
		id: '1',
		name: 'Mandede',
		description:
			'A malawian currency converter app that converts Malawian Kwacha to other currencies. Uses rates from banks and other financial institutions in Malawi.',
		image: '/projects/mandede.svg',
		url: 'https://mandede.cphiri.dev/',
		types: ['web', 'mobile']
	},
	{
		id: '2',
		name: 'Tools',
		description:
			'A malawian currency converter app that converts Malawian Kwacha to other currencies. Uses rates from banks and other financial institutions in Malawi.',
		image: '/projects/tools.svg',
		url: 'https://tools.cphiri.dev/',
		github: 'https://github.com/sevenreup/toolbox-web',
		types: ['web']
	},
	{
		id: '3',
		name: 'WebOs (InProgerss)',
		description: 'Trying to recreate a mobile and desktop os in the browser.',
		image: '/projects/webos.svg',
		url: 'https://webos.cphiri.dev/',
		github: 'https://github.com/sevenreup/web-os',
		types: ['web']
	}
];
