import type { PostMeta } from '$lib/types/post';

export async function load({ params }) {
	const post = await import(`../pages/${params.slug}.md`);
	const { title, date, description } = post.metadata;
	const content = post.default;

	return {
		content,
		meta: {
			title,
			description,
			date
		}
	};
}

export type BlogPostData = {
	meta: PostMeta;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
};
