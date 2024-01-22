<script>
	import { text } from '@sveltejs/kit';
	import Pill from '$lib/components/Pill.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section id="Hero" class="py-12 bg-base-100">
	<div
		class="max-w-[100rem] px-8 sm:px-12 mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0"
	>
		<!-- title panel  -->
		<div
			class="lg:basis-1/2 text-center lg:text-left flex flex-col justify-center mx-auto max-w-[40rem] lg:max-w-[100rem]"
		>
			<div class="flex justify-center lg:justify-start">
				<Pill text="Welcome to RA Global" />
			</div>
			<h1 class="font-bold text-secondary text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight">
				Bridging Borders,<br />Fostering Futures
			</h1>
			<p class="lg:w-3/4 my-8 font-medium text-base/relaxed xl:text-lg/relaxed mx-auto lg:mx-0">
				RA Global leads North Africa in connecting students to educational opportunities in Asia. As
				the key link between these regions, we provide personalized education, emphasizing
				individual strengths and fostering academic excellence.
			</p>
			<div>
				<Button text="Learn More" nav="/about" />
			</div>
		</div>
		<!-- hero image  -->
		<div class="lg:basis-1/2 mx-auto max-w-[40rem] lg:max-w-[100rem]">
			<img src="/images/hero.png" alt="hero" class="w-full mx-auto px-4 lg:px-0" />
		</div>
	</div>
</section>

<style>
</style>
