import type { PostResponse } from '$lib/types/post';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	return {
		posts
	};
};

export type BlogData = {
	posts: PostResponse[];
};
