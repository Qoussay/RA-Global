<script>
	import { fly } from 'svelte/transition';
	export let question;
	export let answer;

	let checked;
</script>

<div
	class="collapse collapse-arrow bg-white shadow-md my-8 2xl:py-5 2xl:px-8 py-3 px-6 rounded-3xl"
>
	<input type="checkbox" bind:checked />
	<div class="collapse-title 2xl:text-xl text-lg text-secondary font-medium">
		{question}
	</div>
	<div class="collapse-content">
		{#if checked}
			<p class="2xl:text-lg text-md leading-relaxed" transition:fly={{ y: 200, duration: 500 }}>
				{answer}
			</p>
		{/if}
	</div>
</div>
