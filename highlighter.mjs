import { codeToHtml, getHighlighter } from 'shiki';
import { transformerMetaHighlight } from '@shikijs/transformers';

const THEME = 'nord';

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function highlighter(code, lang, meta) {
	await getHighlighter({
		langs: [lang],
		themes: [THEME]
	});
	let html;
	if (!meta) {
		html = await codeToHtml(code, {
			lang,
			theme: THEME
		});
	} else {
		html = await codeToHtml(code, {
			lang,
			theme: THEME,
			meta: { __raw: meta },
			transformers: [transformerMetaHighlight()]
		});
	}

	return escapeHtml(html);
}

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(code) {
	return code.replace(
		/[{}`]/g,
		(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' })[character]
	);
}

export default highlighter;
