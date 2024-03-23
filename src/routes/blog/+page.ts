import type { PostResponse } from '$lib/types/post';

export const load = async ({ fetch, url }) => {
	const response = await fetch(`/api/posts${url.search}`);
	const posts = await response.json();

	return {
		posts
	};
};

export type BlogData = {
	posts: PostResponse[];
};
