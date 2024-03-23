export type PostMeta = {
	title: string;
	description: string;
	date: string;
};


export type PostResponse = {
    meta: PostMeta;
    path: string;
	url: string;
}
