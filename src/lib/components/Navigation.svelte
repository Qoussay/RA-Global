<script>
	import { page } from '$app/stores';
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
</script>

<!-- Normal Navigation Links  -->
<div class="hidden lg:flex lg:flex-row lg:pt-4">
	<ul class="flex flex-row space-x-8">
		{#each routes as route}
			<li>
				<a
					href={route.path}
					class="hover:text-base-110 pb-2 duration-200 mx-auto"
					aria-current={$page.url.pathname === route.path}>{route.name}</a
				>
			</li>
		{/each}
	</ul>
</div>
<!-- medium screen navigation drawer  -->
<div class="flex lg:hidden">
	<h1>Drawer</h1>
</div>

<style>
	@media (min-width: 1024px) {
		a {
			display: inline-block;
		}
		a:after {
			display: block;
			content: '';
			height: 7px;
			background: #fbaf4d;
			transform: scaleX(0);
			transition: transform 250ms ease-in-out;
			padding-bottom: 4%;
			border-radius: 5px;
		}
		a:hover:after {
			transform: scaleX(1);
			transition-duration: 200ms;
		}
		a[aria-current='true'] {
			color: #6f7597;
		}

		a[aria-current='true']:after {
			display: block;
			content: '';
			height: 7px;
			background: #fbaf4d;
			transform: scaleX(1);
			padding-bottom: 4%;
			border-radius: 5px;
		}
	}
</style>
