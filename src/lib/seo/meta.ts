import { Config } from '$lib/config';
import { presentations } from '$lib/data/presentations';
import type { PostMeta } from '$lib/types/post';

const pages: Record<string, { title: string; description: string }> = {
	'/': { title: `${Config.title} | Work`, description: Config.description },
	'/resume': {
		title: `${Config.title} | Resume`,
		description:
			'Explore Christopher Phiri’s experience in product engineering, mobile and full stack development, technical skills, and education. Download his resume.'
	},
	'/blog': {
		title: `${Config.title} | Blog`,
		description:
			'Thoughts and projects by Christopher Phiri on software development, programming languages, design, and creative coding.'
	},
	'/art': {
		title: `${Config.title} | Art`,
		description:
			'Browse illustrations and digital artwork by Christopher Phiri, a software developer, UI/UX designer, and illustrator.'
	}
};

export function getPageSeo(pathname: string, post?: PostMeta, status = 200) {
	const path = pathname.replace(/\/+$/, '') || '/';
	const presentation = presentations.find((item) => item.url === path);
	const article = path.startsWith('/blog/') && post;
	const metadata = article
		? { title: `${Config.title} | ${post.title}`, description: post.description }
		: (pages[path] ??
			(presentation && {
				title: `${Config.title} | ${presentation.metadata.title}`,
				description: presentation.metadata.description
			}));
	return {
		title: status >= 400 ? `${status} | ${Config.title}` : (metadata?.title ?? Config.title),
		description:
			status >= 400
				? 'The requested page could not be found or is unavailable.'
				: (metadata?.description ?? Config.description),
		// Build from a fixed origin, never a request host, query string, or fragment.
		canonical: `${Config.url}${path}`,
		image: `${Config.url}/og.png`,
		type: article && status < 400 ? 'article' : 'website',
		noindex: status >= 400
	};
}
