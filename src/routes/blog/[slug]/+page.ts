export async function load({ params }) {
	const post = await import(`./pages/${params.slug}.md`);
	const { title, date, description } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		description,
		date
	};
}

export type BlogPost = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
	title: string;
	description: string;
	date: string;
};
