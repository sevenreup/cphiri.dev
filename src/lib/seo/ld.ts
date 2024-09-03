import { Config } from '$lib/config';
import type { PostMeta } from '$lib/types/post';
import type { Thing, WithContext, Person, Article } from 'schema-dts';
import { createPostOgUrl, createPostUrl } from '../../utils/posts';

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(thing: Schema) {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export const personalSchema: WithContext<Person> = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${Config.url}#me`,
	url: Config.url,
	name: Config.title,
	description: Config.description,
	jobTitle: 'Software Engineer',
	image: `${Config.url}/images/profile.jpg`
};

export const blogSchema = (meta: PostMeta, slug: string): WithContext<Article> => ({
	'@context': 'https://schema.org',
	'@type': 'Article',
	'@id': `${Config.url}#article`,
	mainEntityOfPage: {
		'@type': 'WebPage',
		'@id': createPostUrl(slug)
	},
	url: createPostUrl(slug),
	headline: meta.title,
	description: meta.description,
	image: createPostOgUrl(slug),
	keywords: meta.tags.join(', '),
	author: {
		'@type': 'Person',
		name: 'Christopher Phiri'
	},
	publisher: {
		'@type': 'Organization',
		name: Config.title,
		logo: {
			'@type': 'ImageObject',
			url: `${Config.url}/logo.png`
		}
	},
	datePublished: meta.date,
	dateModified: meta.modified
});
