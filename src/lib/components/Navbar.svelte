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
		}
	];
</script>

<!-- Navbar  -->
<nav class="py-8 text-lg text-accent-one flex">
	<ul class="flex space-x-12 grow my-auto font-semibold">
		{#each routes as route}
			<li>
				<a
					href={route.path}
					class="hover:text-dark-grey pb-2 duration-200"
					aria-current={$page.url.pathname === route.path}>{route.name}</a
				>
			</li>
		{/each}
	</ul>

	<button
		class=" bg-accent-three hover:bg-accent-three-highlight text-accent-one rounded-full py-3 px-8"
		>Enroll today</button
	>
</nav>

<style>
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
</style>
