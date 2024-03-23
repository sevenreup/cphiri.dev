import type { PostMeta } from '$lib/types/post';
import { rawMetaToMeta } from '$lib/utils/posts';

export async function load({ params }) {
	const post = await import(`../pages/${params.slug}.md`);
	const content = post.default;

	return {
		content,
		meta: rawMetaToMeta(post.metadata)
	};
}

export type BlogPostData = {
	meta: PostMeta;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
};
