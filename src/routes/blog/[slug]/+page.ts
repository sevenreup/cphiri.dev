import type { PostMeta } from '$lib/types/post';
import { rawMetaToMeta } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

const posts = import.meta.glob<{
	default: unknown;
	metadata: import('$lib/types/post').PostMetaRaw;
}>('../pages/*.md');

export async function load({ params }) {
	const resolve = posts[`../pages/${params.slug}.md`];
	if (!resolve) error(404, 'Post not found');
	const post = await resolve();
	const content = post.default;

	return {
		content,
		meta: rawMetaToMeta(post.metadata),
		slug: params.slug
	};
}

export type BlogPostData = {
	meta: PostMeta;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
	slug: string;
};
