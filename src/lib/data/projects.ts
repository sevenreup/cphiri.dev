export interface Project {
	id: string;
	name: string;
	description: string;
	image: string;
	github?: string;
	types: string[];
	url?: string;
	isPersonal?: boolean;
}

export interface UIShots {
	url: string;
	image: string;
}

export const projects: Project[] = [
	{
		id: '6',
		name: 'Duwa',
		description:
			'A simple programming language based on the Chichewa language. The language is still in development and is not yet ready for production use.',
		isPersonal: true,
		image: '/images/duwa.svg',
		url: 'https://www.duwa.cphiri.dev',
		github: 'https://github.com/sevenreup/duwa',
		types: ['languages']
	},
	{
		id: '1',
		name: 'Mandede',
		description:
			'A malawian currency converter app that converts Malawian Kwacha to other currencies. Uses rates from banks and other financial institutions in Malawi.',
		isPersonal: true,
		image: '/projects/mandede.svg',
		url: 'https://mandede.cphiri.dev/',
		types: ['web', 'mobile']
	},
	{
		id: '2',
		name: 'Tools',
		description: 'This is a collection of tools or utilities that are sort of useful.',
		isPersonal: true,
		image: '/projects/tools.svg',
		url: 'https://tools.cphiri.dev/',
		github: 'https://github.com/sevenreup/toolbox-web',
		types: ['web']
	},
	{
		id: '3',
		name: 'WebOs (InProgess)',
		description: 'Trying to recreate a mobile and desktop os in the browser.',
		isPersonal: true,
		image: '/projects/webos.svg',
		url: 'https://webos.cphiri.dev/',
		github: 'https://github.com/sevenreup/web-os',
		types: ['web']
	},
	{
		id: '4',
		name: 'Alcor',
		description: 'Alcor is a digital agency that provides web and mobile solutions to businesses.',
		isPersonal: false,
		image: '/projects/alcor.svg',
		url: 'https://www.alcor.dev/',
		types: ['web']
	},
	{
		id: '5',
		name: 'Health Aware',
		description:
			'Health Aware is mobile application designed to keep you informed and educated about all the health-related issues that matter to you',
		isPersonal: false,
		image: '/projects/health_aware.svg',
		url: 'https://health.alcor.dev/',
		types: ['web', 'mobile']
	}
];

export const uiShots: UIShots[] = [
	{
		url: 'https://dribbble.com/shots/22826141-Alcor-website-design',
		image: '/ui/3.png'
	},
	{
		url: 'https://dribbble.com/shots/15303466-Budget-App-design',
		image: '/ui/1.png'
	},
	{
		url: 'https://dribbble.com/shots/18940857-Dating-App-Design',
		image: '/ui/2.png'
	}
];
