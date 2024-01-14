import { readable } from 'svelte/store';

export const routes = readable([], (set) => {
	const routes = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Partners',
			path: '/partners'
		},
		{
			name: 'Contact us',
			path: '/contact'
		}
	];

	set(routes);

	return () => {};
});
