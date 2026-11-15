import { describe, expect, it } from 'vitest';
import { getPageSeo } from './meta';
import { blogSchema, serializeSchema } from './ld';

const post = {
	title: 'Duwa first look',
	description: 'A Chichewa programming language.',
	tags: ['duwa'],
	date: '2024-09-03T09:00:00Z',
	modified: '2024-09-03T09:00:00Z'
};

describe('SEO metadata', () => {
	it.each(['/', '/resume', '/blog', '/art', '/presentations/recreational-programming'])(
		'provides route-specific metadata and an absolute canonical for %s',
		(path) => {
			const seo = getPageSeo(path);
			expect(seo.title).toContain('Christopher Phiri');
			expect(seo.description.length).toBeGreaterThan(50);
			expect(seo.canonical).toBe(`https://www.cphiri.dev${path}`);
			expect(seo.noindex).toBe(false);
		}
	);
	it('normalizes trailing slashes and never uses a supplied host as the canonical origin', () => {
		expect(getPageSeo('/resume/').canonical).toBe('https://www.cphiri.dev/resume');
		expect(getPageSeo('//example.com').canonical).toBe('https://www.cphiri.dev//example.com');
	});
	it('uses article content for metadata and keeps the page URL separate from the image', () => {
		const seo = getPageSeo('/blog/duwa-first-look', post);
		expect(seo.title).toContain(post.title);
		expect(seo.description).toBe(post.description);
		expect(seo.type).toBe('article');
		expect(seo.canonical).toBe('https://www.cphiri.dev/blog/duwa-first-look');
		expect(seo.image).toBe('https://www.cphiri.dev/og.png');
	});
	it('marks error pages noindex', () => {
		expect(getPageSeo('/blog/missing', undefined, 404).noindex).toBe(true);
		expect(getPageSeo('/blog/missing', undefined, 500).noindex).toBe(true);
	});
	it('gives each article a unique structured-data identifier', () => {
		expect(blogSchema(post, 'one')['@id']).not.toBe(blogSchema(post, 'two')['@id']);
	});
	it('serializes text safely without allowing it to close the JSON-LD script', () => {
		const schema = blogSchema({ ...post, title: '</script><script>alert(1)</script>' }, 'one');
		const serialized = serializeSchema(schema);
		expect(serialized.match(/<\/script>/g)).toHaveLength(1);
		const json = serialized.slice(serialized.indexOf('>') + 1, serialized.lastIndexOf('</script>'));
		expect(JSON.parse(json).headline).toBe(schema.headline);
	});
});
