import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from '@zerodevx/svelte-img/vite';
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
	ssr: { external: ['@resvg/resvg-js'] },
	plugins: [devtoolsJson(), sveltekit(), imagetools(), tailwindcss()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			external: ['@resvg/resvg-js', 'css-tree']
		}
	}
});
