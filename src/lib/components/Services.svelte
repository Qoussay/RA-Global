<script>
	import Button from './Button.svelte';
	import Pill from './Pill.svelte';
	import CheckCircle from '~icons/tdesign/check-circle-filled';

	const services = [
		'Tailored Scholarship Guidance',
		'University Placement Expertise',
		'Educational Program Recommendations',
		'Application and Documentation Assistance',
		'Career Path Counseling',
		'Continuous Support'
	];
</script>

<section id="Services" class="py-20 bg-base-100">
	<div class="max-w-[100rem] sm:px-8 px-4 mx-auto flex flex-col space-y-12 lg:space-y-0">
		<!-- geral idea  -->
		<div class="flex flex-col text-center w-full lg:w-3/4 mx-auto">
			<h1 class="font-bold text-secondary text-3xl/snug lg:text-4xl/snug xl:text-5xl/snug">
				Empowering Your Academic Journey with Expert Guidance and Opportunities.
			</h1>
			<p class="font-medium text-base xl:text-lg my-8">
				We are your partners in academic excellence, offering personalized services to connect you
				with tailored scholarship and educational opportunities. Our commitment is to guide you
				through the process, ensuring you access meaningful learning experiences on your journey to
				success.
			</p>
			<!-- services provided  -->
			<p class="font-medium text-base xl:text-lg my-8">
				{#each services as service}
					<div class="inline-block px-4 py-2">
						<CheckCircle class="w-6 h-6 text-success inline" />
						{service}
					</div>
				{/each}
			</p>
			<!-- <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-8 w-fit mx-auto">
				{#each services as service}
					<div class="flex flex-row space-x-4 w-fit">
						<CheckCircle class="w-6 h-6 text-success" />
						<p class="text-secondary font-medium text-base xl:text-lg text-left">{service}</p>
					</div>
				{/each}
			</div> -->
		</div>
		<!-- service one  -->
		<div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
			<!-- image  -->
			<div class="mx-auto w-3/4 lg:mx-0 lg:w-1/2">
				<img src="/images/serviceOne.png" alt="service one" class="w-full lg:w-3/4 px-4 lg:px-0" />
			</div>
			<!-- title and description  -->
			<div class="flex flex-col justify-center w-3/4 lg:w-1/2 mx-auto lg:mx-0">
				<Pill text="Unlocking Educational Paths" />
				<h1
					class="font-bold text-secondary text-2xl lg:text-3xl xl:text-4xl leading-tight lg:leading-snug"
				>
					Scholarship Opportunities
				</h1>
				<p class="font-medium text-base xl:text-lg my-8">
					At RA Global, we go beyond guidance, dedicating ourselves to steering you toward academic
					success. Understanding your aspirations, we carefully curate personalized scholarship and
					educational opportunities, ensuring you access a diverse spectrum that propels your
					journey to excellence.
				</p>
				<Button text="Learn More" nav="/about" />
			</div>
		</div>
		<!-- service two  -->
		<div class="flex flex-col lg:flex-row-reverse space-y-8 lg:space-y-0">
			<!-- image  -->
			<div class="mx-auto w-3/4 lg:mx-0 lg:w-1/2">
				<img
					src="/images/serviceTwo.png"
					alt="service two"
					class="w-full lg:w-3/4 px-4 lg:px-0 lg:ms-auto"
				/>
			</div>
			<!-- title and description  -->
			<div class="flex flex-col justify-center w-3/4 lg:w-1/2 mx-auto lg:mx-0">
				<Pill text="Your Educational Haven" />
				<h1
					class="font-bold text-secondary text-2xl lg:text-3xl xl:text-4xl leading-tight lg:leading-snug"
				>
					Gateway to Academic Success
				</h1>
				<p class="font-medium text-base xl:text-lg my-8">
					We specialize in forging connections with esteemed universities, providing you access to
					state-of-the-art educational programs. Our expert guidance and tailored support propel you
					towards a future of unparalleled educational achievement.
				</p>
				<Button text="Learn More" nav="/about" />
			</div>
		</div>
	</div>
</section>

<style></style>
