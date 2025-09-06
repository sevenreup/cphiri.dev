import type { PostMetaRaw } from '$lib/types/post';

export interface PresentationData {
	slug: string;
	path: string;
	url: string;
	metadata: PostMetaRaw;
}

export const presentations: PresentationData[] = [
	{
		slug: 'recreational-programming',
		path: '/presentations/recreational-programming',
		url: '/presentations/recreational-programming',
		metadata: {
			title: 'Recreational Programming: You guys are getting paid?',
			description: 'A presentation about rediscovering the joy of programming through recreational coding - exploring different styles and approaches to programming for fun, not profit.',
			tags: 'talks,programming,creativity,community',
			date: '2024-09-06T09:00:00Z',
			modified: '2024-09-06T09:00:00Z'
		}
	}
];