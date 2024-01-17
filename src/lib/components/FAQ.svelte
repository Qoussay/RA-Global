<script>
	import { fly } from 'svelte/transition';
	export let data;

	let checked;
</script>

<div class="collapse collapse-arrow bg-white shadow-md rounded-3xl my-8 py-2 px-4">
	<input id={data.id} type="checkbox" bind:checked />

	<div class="collapse-title text-secondary font-semibold text-base/relaxed xl:text-lg/relaxed">
		<label for={data.id}> {data.question} </label>
	</div>
	<div class="collapse-content">
		{#if checked}
			<p
				class="text-sm/relaxed xl:text-base/relaxed font-medium"
				transition:fly={{ y: 200, duration: 500 }}
			>
				{data.answer}
			</p>
		{/if}
	</div>
</div>
