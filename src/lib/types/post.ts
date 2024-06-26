export type PostMetaRaw = {
	title: string;
	description: string;
	tags: string;
	date: string;
};

export type PostMeta = {
	title: string;
	description: string;
	date: string;
	tags: string[];
};


export type PostResponse = {
    meta: PostMeta;
    path: string;
	url: string;
}
