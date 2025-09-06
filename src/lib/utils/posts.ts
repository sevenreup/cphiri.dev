import type { PostMeta, PostMetaRaw, PostResponse } from '$lib/types/post';
import { presentations } from '$lib/data/presentations';

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
				slug: postPath.split('/').pop() ?? postPath,
				url,
				type: 'markdown' as const
			};
		})
	);

	return allPosts;
};

export const fetchPresentations = (): PostResponse[] => {
	return presentations.map(presentation => ({
		meta: rawMetaToMeta(presentation.metadata),
		path: presentation.path,
		slug: presentation.slug,
		url: presentation.url,
		type: 'presentation' as const
	}));
};

export const fetchAllPosts = async (): Promise<PostResponse[]> => {
	const markdownPosts = await fetchMarkdownPosts();
	const presentationPosts = fetchPresentations();
	
	// Combine and sort by date
	return [...markdownPosts, ...presentationPosts].sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
};
