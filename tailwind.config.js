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
			'base-110': '#e5e6eb'
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
					neutral: '#575757',
					'base-100': '#f8f8fa',
					'base-200': '#FEF6EB',
					'base-300': '#fbefdf',
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
