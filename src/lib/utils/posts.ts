import type { PostMeta, PostMetaRaw, PostResponse } from '$lib/types/post';

const formatTags = (tagRaw: string): string[] => {
	const tags = tagRaw.split(',').map((tag) => tag.trim());
	return tags;
};

export const rawMetaToMeta = (rawMeta: PostMetaRaw): PostMeta => {
	return {
		title: rawMeta.title,
		description: rawMeta.description,
		date: rawMeta.date,
		tags: formatTags(rawMeta.tags),
		modified: rawMeta.modified
	};
};

export const fetchMarkdownPosts = async (): Promise<PostResponse[]> => {
	const allPostFiles = import.meta.glob('/src/routes/blog/pages/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: PostMetaRaw };
			const postPath = path.slice(11, -3);
			const url = `/blog/${postPath.replace('/blog/pages/', '')}`;
			return {
				meta: rawMetaToMeta(metadata),
				path: postPath,
				url
			};
		})
	);

	return allPosts;
};
