<script>
	export let text;
	export let nav;
</script>

<a href={nav}>
	<button
		class=" bg-accent hover:bg-accent-highlight text-secondary rounded-full py-3 px-7 mt-12 text-lg"
		>{text} <strong class="ps-4">→</strong></button
	>
</a>
