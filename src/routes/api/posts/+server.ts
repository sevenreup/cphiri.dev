import { fetchAllPosts } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	const filters = new URLSearchParams(url.search);
	const allPosts = await fetchAllPosts();

	const tag = filters.get('tag');
	if (tag !== null) {
		const filteredPosts = allPosts.filter((post) => post.meta.tags.includes(tag));
		return json(filteredPosts);
	}

	return json(allPosts);
};
