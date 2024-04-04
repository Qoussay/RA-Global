<script>
	import Star from '~icons/material-symbols/kid-star';
	export let testimony;
</script>

<div class="{testimony.bgColor} p-8 rounded-xl text-center md:text-left">
	<img
		src="/images/students/{testimony.image}"
		class="w-20 h-20 rounded-full border-accent border-2 mx-auto md:mx-0"
		alt="student profile"
	/>
	<h1 class="text-lg xl:text-xl font-semibold text-secondary mt-4">{testimony.name}</h1>
	<p><em>{testimony.location}</em></p>
	<div class="flex space-x-1 mt-2 justify-center md:justify-start">
		{#each Array(testimony.stars) as _, i}
			<Star class="2xl:w-5 2xl:h-5 w-4 h-4 text-accent" />
		{/each}
	</div>
	<p class="text-base/relaxed xl:text-lg/relaxed mt-6 font-medium">"{testimony.quote}"</p>
</div>
