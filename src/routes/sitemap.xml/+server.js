import { fetchMarkdownPosts } from '$lib/utils/posts';
import { response } from 'super-sitemap';
import { Config } from '$lib/config';

export const prerender = true;

export async function GET() {
	const allPosts = await fetchMarkdownPosts();
	return response({
		origin: Config.url,
		paramValues: {
			'/blog/[slug]': allPosts.map((post) => post.slug)
		},
		sort: 'alpha'
	});
}
