<script>
	import Pill from '$lib/components/Pill.svelte';
	import CheckCircle from '~icons/tdesign/check-circle-filled';

	const services = [
		'Tailored Guidance',
		'Individualized Attention',
		'Specialized Programs',
		'Inclusive Community',
		'Seasoned Professionals'
	];
</script>

<main id="homePage">
	<section id="Hero" class=" px-36 flex pt-4 pb-24">
		<!-- left panel -->
		<div class="w-1/2">
			<Pill text="Welcome to RA Global" />
			<h1 class=" text-7xl font-bold pb-4 text-dark-blue">Bridging Borders,</h1>
			<h1 class="text-7xl font-bold pb-8 text-dark-blue">Fostering Futures</h1>
			<p class=" text-2xl w-3/4 leading-relaxed">
				RA Global leads North Africa in connecting students to educational opportunities in Asia. As
				the key link between these regions, we provide personalized education, emphasizing
				individual strengths and fostering academic excellence.
			</p>
			<button class=" bg-accent-three rounded-full py-4 px-8 mt-12 text-xl"
				>Enroll today <strong class="ps-4">→</strong></button
			>
		</div>
		<!-- right panel  -->
		<div class="w-1/2">
			<img src="/images/hero.png" alt="hero" class="w-full" />
		</div>
	</section>

	<section id="Services" class="bg-off-accent-one px-36 py-20">
		<h1
			class=" text-center text-5xl w-1/2 mx-auto leading-normal text-dark-blue font-semibold pb-12"
		>
			Empowering Your Academic Journey with Expert Guidance and Opportunities.
		</h1>
		<p class=" text-2xl w-1/2 mx-auto text-center leading-relaxed">
			We are your partners in academic excellence, offering personalized services to connect you
			with tailored scholarship and educational opportunities. Our commitment is to guide you
			through the process, ensuring you access meaningful learning experiences on your journey to
			success.
		</p>
		<div class="w-1/2 grid grid-cols-3 mx-auto">
			{#each services as service}
				<div class="flex space-x-4">
					<CheckCircle class="w-8 h-8 text-green" />
					<p class=" text-xl">{service}</p>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	#Hero {
		background: linear-gradient(to bottom, #fffdfa 0%, #fffdfa 90%, #ffedee 100%);
	}
</style>
