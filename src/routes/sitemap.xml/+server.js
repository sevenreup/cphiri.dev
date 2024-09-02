import { fetchMarkdownPosts } from '$lib/utils/posts';
import { response } from 'super-sitemap';

export const prerender = true;

export async function GET() {
	const allPosts = await fetchMarkdownPosts();
	return response({
		origin: 'https://www.cphiri.dev',
		paramValues: {
			'/blog/[slug]': allPosts.map((post) => post.slug)
		},
		changefreq: 'daily',
		priority: 0.7,
		sort: 'alpha'
	});
}
