<script>
	import '../app.css';
	import MainBar from '$lib/components/MainBar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<section id="navigation" class=" bg-off-white px-36">
	<MainBar />
	<Navbar />
</section>

<slot />
