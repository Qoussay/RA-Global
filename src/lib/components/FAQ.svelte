<script>
	import { fly } from 'svelte/transition';
	export let question;
	export let answer;

	let checked;
</script>

<div class="collapse collapse-arrow bg-white shadow-md my-8 py-5 px-8 rounded-3xl">
	<input type="checkbox" bind:checked />
	<div class="collapse-title text-xl text-secondary font-medium">
		{question}
	</div>
	<div class="collapse-content">
		{#if checked}
			<p class="text-lg leading-relaxed" transition:fly={{ y: 200, duration: 500 }}>{answer}</p>
		{/if}
	</div>
</div>
