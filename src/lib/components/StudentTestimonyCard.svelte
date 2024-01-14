<script>
	import Star from '~icons/material-symbols/kid-star';
	export let testimony;
</script>

<div class="{testimony.bgColor} text-black p-8 rounded-xl">
	<img
		src="/images/students/{testimony.image}"
		class="w-20 h-20 rounded-full border-primary border-4"
		alt="student profile"
	/>
	<h1 class="2xl:text-xl text-lg font-medium pt-4">{testimony.name}</h1>
	<div class="flex space-x-1 mt-2">
		{#each Array(testimony.stars) as _, i}
			<Star class="2xl:w-5 2xl:h-5 w-4 h-4 text-accent" />
		{/each}
	</div>
	<p class="2xl:text-lg text-md leading-relaxed mt-8">"{testimony.quote}"</p>
</div>
