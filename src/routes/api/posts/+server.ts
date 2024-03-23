import { fetchMarkdownPosts } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (new Date(b.meta.date) as any) - (new Date(a.meta.date) as any);
	});

	return json(sortedPosts);
};
