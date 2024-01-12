<script>
</script>

<!-- Navbar  -->
<nav class="py-8 text-lg text-dark-blue flex">
	<ul class="flex space-x-12 grow my-auto font-semibold">
		<li>
			<a href="/" class="hover:text-pastel-blue pb-2 duration-200">Home</a>
		</li>
		<li>
			<a href="/about" class="hover:text-pastel-blue pb-2 duration-200">About</a>
		</li>
	</ul>

	<button class=" bg-pastel-yellow rounded-full py-3 px-8">Enroll today</button>
</nav>

<style>
	li {
		display: inline-block;
	}
	li:after {
		display: block;
		content: '';
		height: 7px;
		background: #ffd984;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
		transition-duration: 200ms;
		padding-bottom: 4%;
		border-radius: 5px;
	}
	li:hover:after {
		transform: scaleX(1);
		transition-duration: 200ms;
	}
</style>
