<script>
	import { page } from '$app/stores';
	import { routes } from '$lib/stores';
</script>

<!-- Navbar  -->
<nav class="py-8 2xl:text-lg sm:text-md text-xl flex sm:flex-row flex-col space-y-6 sm:space-y-0">
	<ul
		class="sm:flex-row flex flex-col space-y-6 sm:space-y-0 sm:space-x-12 grow my-auto font-semibold text-base-100 sm:text-secondary"
	>
		{#each $routes as route}
			<li>
				<a
					href={route.path}
					class="hover:text-base-110 pb-2 duration-200 mx-auto sm:mx-0"
					aria-current={$page.url.pathname === route.path}>{route.name}</a
				>
			</li>
		{/each}
	</ul>

	<button
		class=" bg-accent hover:bg-accent-highlight text-secondary rounded-full 2xl:py-3 2xl:px-8 py-2 px-7 w-fit sm:mx-0 mx-auto"
		>Enroll today</button
	>
</nav>

<style>
	@media (min-width: 640px) {
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
