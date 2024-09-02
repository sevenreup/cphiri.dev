export type PostMetaRaw = {
	title: string;
	description: string;
	tags: string;
	date: string;
	modified: string;
};

export type PostMeta = {
	title: string;
	description: string;
	modified: string;
	date: string;
	tags: string[];
};

export type PostResponse = {
	meta: PostMeta;
	path: string;
	slug: string;
	url: string;
};
