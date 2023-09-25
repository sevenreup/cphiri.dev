export interface Project {
	id: string;
	name: string;
	description: string;
	image: string;
	url?: string;
	github?: string;
}

export const projects: Project[] = [
	{
		id: '1',
		name: 'Mandede',
		description:
			'A malawian currency converter app that converts Malawian Kwacha to other currencies. Uses rates from banks and other financial institutions in Malawi.',
		image: '/projects/mandede.svg',
		url: 'https://mandede.cphiri.dev/'
	},
	{
		id: '2',
		name: 'Tools',
		description:
			'A malawian currency converter app that converts Malawian Kwacha to other currencies. Uses rates from banks and other financial institutions in Malawi.',
		image: '/projects/tools.svg',
		url: 'https://tools.cphiri.dev/',
		github: 'https://github.com/sevenreup/toolbox-web'
	}
];
