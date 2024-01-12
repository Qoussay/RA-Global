<script>
	import { page } from '$app/stores';
</script>

<!-- Navbar  -->
<nav class="py-8 text-lg text-dark-blue flex">
	<ul class="flex space-x-12 grow my-auto font-semibold">
		<li>
			<a
				href="/"
				class="hover:text-pastel-blue pb-2 duration-200"
				aria-current={$page.url.pathname === '/'}>Home</a
			>
		</li>
		<li>
			<a
				href="/about"
				class="hover:text-pastel-blue pb-2 duration-200"
				aria-current={$page.url.pathname === '/about'}>About</a
			>
		</li>
	</ul>

	<button class=" bg-pastel-yellow rounded-full py-3 px-8">Enroll today</button>
</nav>

<style>
	a {
		display: inline-block;
	}
	a:after {
		display: block;
		content: '';
		height: 7px;
		background: #ffd984;
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
		color: #c7c7ff;
	}

	a[aria-current='true']:after {
		display: block;
		content: '';
		height: 7px;
		background: #ffd984;
		transform: scaleX(1);
		padding-bottom: 4%;
		border-radius: 5px;
	}
</style>
