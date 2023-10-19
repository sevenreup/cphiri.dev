import { Config } from '$lib/config';
import type { Thing, WithContext, Person } from 'schema-dts';

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
    image: `${Config.url}/images/profile.jpg`,
};
