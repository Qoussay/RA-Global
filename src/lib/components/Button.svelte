<script>
	export let text;
	export let nav;
</script>

<a href={nav} class="w-fit">
	<button
		class="font-semibold w-fit bg-accent hover:bg-accent-highlight text-sm xl:text-base rounded-full py-2 px-5"
	>
		{text}
	</button>
</a>
