<script>
	export let text;
	export let nav;
</script>

<a href={nav}>
	<button
		class=" bg-accent hover:bg-accent-highlight text-secondary rounded-full py-2 px-6 2xl:mt-12 mt-8 text-md 2xl:text-md"
		>{text} <strong class="ps-4">→</strong></button
	>
</a>
