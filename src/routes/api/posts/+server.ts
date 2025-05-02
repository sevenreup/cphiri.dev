import { fetchMarkdownPosts } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	const filters = new URLSearchParams(url.search);
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (new Date(b.meta.date) as any) - (new Date(a.meta.date) as any);
	});

	const tag = filters.get('tag');
	if (tag !== null) {
		const filteredPosts = sortedPosts.filter((post) => post.meta.tags.includes(tag));
		return json(filteredPosts);
	}

	return json(sortedPosts);
};
