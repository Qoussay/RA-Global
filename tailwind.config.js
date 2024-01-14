/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#fff',
			black: '#000',
			'primary-highlight': '#a44648',
			'secondary-highlight': '#32326a',
			'accent-highlight': '#fbbf70',
			'base-110': '#6f7597'
		},
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#8e191b',
					secondary: '#000046',
					accent: '#fbaf4d',
					neutral: '#d6d3d1',
					'base-100': '#e9efff',
					'base-200': '#FFFDFA',
					'base-300': '#f6f8ff',
					info: '#bae6fd',
					success: '#84cc80',
					warning: '#fde047',
					error: '#fda4af'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
