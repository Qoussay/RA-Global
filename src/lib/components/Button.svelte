<script>
	export let text;
	export let nav;
	export let large = false;
</script>

<a href={nav}>
	<button
		class="font-semibold w-fit bg-accent hover:bg-accent-highlight rounded-full py-3 px-6"
		class:text-sm={!large}
		class:xl:text-base={!large}
		class:text-lg={large}
	>
		{text}
	</button>
</a>
