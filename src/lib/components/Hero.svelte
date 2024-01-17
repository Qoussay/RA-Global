<script>
	import { text } from '@sveltejs/kit';
	import Pill from './Pill.svelte';
	import Button from './Button.svelte';
</script>

<section id="Hero" class="py-20">
	<div
		class="max-w-[100rem] sm:px-8 px-4 mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0"
	>
		<!-- title panel  -->
		<div class="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
			<div class="flex justify-center lg:justify-start">
				<Pill text="Welcome to RA Global" />
			</div>
			<h1
				class="font-bold text-secondary text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-snug"
			>
				Bridging Borders,<br />Fostering Futures
			</h1>
			<p class="w-3/4 mt-4 mb-8 font-medium text-base xl:text-lg mx-auto lg:mx-0">
				RA Global leads North Africa in connecting students to educational opportunities in Asia. As
				the key link between these regions, we provide personalized education, emphasizing
				individual strengths and fostering academic excellence.
			</p>
			<Button text="Learn More" nav="/about" />
		</div>
		<!-- hero image  -->
		<div class="w-full lg:w-1/2">
			<img src="/images/hero.png" alt="hero" class="w-full mx-auto px-4 lg:px-0" />
		</div>
	</div>
</section>

<style>
	#Hero {
		background: linear-gradient(to bottom, #fff9f3 0%, #fff9f3 90%, #000046 100%);
	}
</style>
