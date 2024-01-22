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
			'base-110': '#E1BD98'
		},
		extend: {
			backgroundImage: {
				redCircle: "url('/images/patterns/primaryCircle.png')",
				blueCircle: "url('/images/patterns/secondaryCircle.png')",
				yellowCircle: "url('/images/patterns/accentCircle.png')"
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#8e191b',
					secondary: '#000046',
					accent: '#fbaf4d',
					neutral: '#f2e3d3',
					'base-100': '#fff6eb',
					'base-200': '#fff9f3',
					'base-300': '#F3F0ED',
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
