import { Config } from '$lib/config';

export const createPostUrl = (slug: string) => {
	return `${Config.url}/blog/${slug}`;
};

export const createPostOgUrl = (slug: string) => {
	return `${Config.url}/api/og?blog=${slug}`;
};
