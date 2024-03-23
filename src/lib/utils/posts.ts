import type { PostMeta, PostResponse } from '$lib/types/post';

export const fetchMarkdownPosts = async (): Promise<PostResponse[]> => {
	const allPostFiles = import.meta.glob('/src/routes/blog/pages/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: PostMeta };
			const postPath = path.slice(11, -3);
			const url = `/blog/${postPath.replace('/blog/pages/', '')}`;
			return {
				meta: metadata,
				path: postPath,
				url
			};
		})
	);

	return allPosts;
};
