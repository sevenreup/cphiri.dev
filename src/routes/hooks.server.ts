import { themeMap, themes } from '$lib/themes';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let theme = event.cookies.get('theme');

	if (!theme || !themes.includes(theme)) {
		theme = themeMap['dark'];
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('data-theme=""', `data-theme="${theme}"`);
		}
	});
};
