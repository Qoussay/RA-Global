<script>
	import Star from '~icons/material-symbols/kid-star';
	export let testimony;
</script>

<div class="{testimony.bgColor} text-black p-8 rounded-xl">
	<img
		src="/images/students/{testimony.image}"
		class="w-20 h-20 rounded-full border-accent-two border-4"
		alt="student profile"
	/>
	<h1 class="text-xl font-medium pt-4">{testimony.name}</h1>
	<div class="flex space-x-1 mt-2">
		{#each Array(testimony.stars) as _, i}
			<Star class="w-5 h-5 text-accent-three" />
		{/each}
	</div>
	<p class="text-lg leading-relaxed mt-8">"{testimony.quote}"</p>
</div>
