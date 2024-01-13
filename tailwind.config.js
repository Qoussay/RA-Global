/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#fff',
			black: '#000',
			beige: '#FFF9F1',
			'accent-one': '#000046',
			'accent-two': '#8E191B',
			'accent-three': '#fbaf4d',
			'accent-one-highlight': '#32326a',
			'accent-two-highlight': '#a44648',
			'accent-three-highlight': '#fbbf70',
			'soft-one': '#e9efff',
			'off-soft-one': '#DBE1F0',
			'soft-two': '#FFFDFA',
			'soft-three': '#f6f8ff',
			'dark-grey': '#6f7597',
			'dark-beige': '#e5ddd3',
			green: '#84CC80'
		},
		extend: {}
	},
	plugins: []
};
