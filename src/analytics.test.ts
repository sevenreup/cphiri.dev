import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it, vi } from 'vitest';

const template = readFileSync(new URL('./app.html', import.meta.url), 'utf8');
const bootstrap = template.match(/<script id="analytics-bootstrap">([\s\S]*?)<\/script>/)?.[1];
if (!bootstrap) throw new Error('Analytics bootstrap is missing');

function initialize(hostname: string) {
	const appendChild = vi.fn();
	const window = { location: { hostname } } as {
		location: { hostname: string };
		dataLayer?: IArguments[];
		gtag?: (...args: unknown[]) => void;
	};
	runInNewContext(bootstrap!, {
		window,
		document: { createElement: () => ({}), head: { appendChild } }
	});
	return { window, appendChild };
}

describe('analytics bootstrap', () => {
	it.each([
		'localhost',
		'127.0.0.1',
		'[::1]',
		'cphiri-dev.vercel.app',
		'preview.cphiri.dev',
		'cphiri.dev.example.com'
	])('does not load analytics or queue events on %s', (hostname) => {
		const { window, appendChild } = initialize(hostname);
		expect(appendChild).not.toHaveBeenCalled();
		expect(window.dataLayer).toBeUndefined();
		expect(window.gtag).toBeUndefined();
	});

	it.each(['cphiri.dev', 'www.cphiri.dev'])('initializes one Google tag on %s', (hostname) => {
		const { window, appendChild } = initialize(hostname);
		expect(appendChild).toHaveBeenCalledTimes(1);
		expect(appendChild).toHaveBeenCalledWith({
			async: true,
			src: 'https://www.googletagmanager.com/gtag/js?id=G-79022KEJ81'
		});
		const commands = window.dataLayer!.map((args) => Array.from(args));
		expect(commands).toHaveLength(2);
		expect(commands[0][0]).toBe('js');
		expect(commands[1]).toEqual(['config', 'G-79022KEJ81']);
	});
});
