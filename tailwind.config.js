/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		}
	},
	daisyui: {
		themes: ['light', 'dark']
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
export default config;
