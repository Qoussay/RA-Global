<script>
	import { text } from '@sveltejs/kit';
	import Pill from './Pill.svelte';
	import Button from './Button.svelte';
</script>

<section id="Hero" class="py-20">
	<div class="max-w-[100rem] px-8 mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0">
		<!-- title panel  -->
		<div class="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
			<div class="flex justify-center lg:justify-start">
				<Pill text="Welcome to RA Global" />
			</div>
			<h1 class="font-bold text-secondary text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight">
				Bridging Borders,<br />Fostering Futures
			</h1>
			<p class="lg:w-3/4 my-8 font-medium text-base xl:text-lg mx-auto lg:mx-0">
				RA Global leads North Africa in connecting students to educational opportunities in Asia. As
				the key link between these regions, we provide personalized education, emphasizing
				individual strengths and fostering academic excellence.
			</p>
			<div>
				<Button text="Learn More" nav="/about" />
			</div>
		</div>
		<!-- hero image  -->
		<div class="w-full lg:w-1/2">
			<img src="/images/hero.png" alt="hero" class="w-full mx-auto px-4 lg:px-0" />
		</div>
	</div>
</section>

<style>
	#Hero {
		background: linear-gradient(to bottom, #fff9f3 0%, #fff9f3 80%, #fff6eb 100%);
	}
</style>
