<script>
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Button from './Button.svelte';
	import MenuIcon from '~icons/material-symbols/menu-rounded';
	import { text } from '@sveltejs/kit';
	import { browser } from '$app/environment';

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

	let menuToggled = false;

	$: {
		if (menuToggled && browser) {
			document.querySelector('body').style.overflow = 'hidden';
		} else if (!menuToggled && browser) {
			document.querySelector('body').style.overflow = 'auto';
		}
	}
</script>

<!-- Normal Navigation Links  -->
<div class="hidden lg:flex lg:flex-row lg:pt-4 lg:justify-between">
	<ul class="flex flex-row space-x-8">
		{#each routes as route}
			<li class="my-auto">
				<a
					href={route.path}
					class="hover:text-secondary-highlight pb-2 duration-200 text-base xl:text-lg font-semibold"
					aria-current={$page.url.pathname === route.path}
				>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
	<Button text="Enroll today" nav="/contact" />
</div>
<!-- medium screen navigation drawer  -->
<div class="flex lg:hidden z-30">
	<!-- Menu Toggle  -->
	<input type="checkbox" id="menu-toggle" class="hidden" bind:checked={menuToggled} />
	<label
		for="menu-toggle"
		class="flex items-center cursor-pointer z-10"
		class:text-base-200={menuToggled}
		class:text-secondary={!menuToggled}
	>
		<MenuIcon class="w-10 h-10" />
	</label>
	<!-- drawer  -->
	{#if menuToggled}
		<div
			class="w-screen h-screen bg-secondary fixed top-0 start-0"
			transition:slide={{ duration: 500, axis: 'y', easing: quintInOut }}
		>
			<ul class="flex flex-col justify-center h-full space-y-12">
				{#each routes as route}
					<li class="w-fit mx-auto text-white">
						<a
							href={route.path}
							class="hover:text-neutral pb-2 duration-200 text-lg font-semibold"
							aria-current={$page.url.pathname === route.path}
							on:click={() => (menuToggled = false)}
						>
							{route.name}
						</a>
					</li>
				{/each}
				<li class="w-fit mx-auto text-lg">
					<Button text="Enroll today" nav="/contact" />
				</li>
			</ul>
		</div>
	{/if}
</div>

<style>
	a:after {
		display: block;
		content: '';
		height: 5px;
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
		color: #32326a;
	}

	a[aria-current='true']:after {
		display: block;
		content: '';
		height: 5px;
		background: #fbaf4d;
		transform: scaleX(1);
		padding-bottom: 4%;
		border-radius: 5px;
	}

	@media (max-width: 1024px) {
		a[aria-current='true'] {
			color: #f2e3d3;
		}
	}
</style>
