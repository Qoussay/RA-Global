<script>
	import '../app.css';
	import MainBar from '$lib/components/MainBar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<section id="navigation" class=" bg-base-100 px-56">
	<MainBar />
	<Navbar />
</section>

<slot />
