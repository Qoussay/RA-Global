<script>
	import Pill from '$lib/components/Pill.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { text } from '@sveltejs/kit';

	const services = {
		groupOne: [
			{
				title: 'Student Recruitment Expertise',
				description:
					'Specializing in recruiting students from North Africa for universities, ensuring diversity and quality.',
				icon: 'student'
			},
			{
				title: 'Brand Promotion and Awareness',
				description:
					'Directly promoting universities to enhance brand awareness in the North African market.',
				icon: 'megaphone'
			},
			{
				title: 'Event Organization and Attendance',
				description:
					'Organizing and participating in events to reach more students and foster connections with universities.',
				icon: 'calendar'
			}
		],
		groupTwo: [
			{
				title: 'Tailored Marketing Strategies',
				description:
					'Developing targeted marketing campaigns to engage North African students and promote university programs.',
				icon: 'bullseye'
			},
			{
				title: 'Comprehensive Application Support',
				description:
					'Streamlining the application process for students, providing guidance and acting as a bridge between students and universities.',
				icon: 'support'
			}
		]
	};
</script>

<scrpt></scrpt>

<section id="PartnersHero" class="px-4 sm:px-12 my-10">
	<!-- title and description  -->
	<div class="mx-auto max-w-[30rem] lg:max-w-[100rem] bg-partnersBg">
		<div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12">
			<!-- title and info  -->
			<div class="lg:basis-1/2 flex flex-col justify-center">
				<Pill text="Join RAG Family!" />
				<h1 class=" font-medium text-secondary text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight">
					Partner with RA Global
				</h1>
				<div class="hidden lg:block relative">
					<img src="/images/arrow.png" class="absolute bottom-5 -right-5 w-1/5" alt="red arrow" />
				</div>
				<h1 class=" font-bold text-secondary text-3xl/tight lg:text-4xl/tight xl:text-5xl/tight">
					The Education Consultancy Leader in North Africa
				</h1>
				<p class="py-2 font-medium text-base xl:text-lg">
					Become part of RA Global's esteemed university network and elevate your institution's
					offerings. Expand your reach and enhance student recruitment by leveraging our
					unparalleled consultancy services.
				</p>
			</div>
			<!-- services provided -->
			<div class="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:basis-1/2">
				<!-- first group -->
				<div class="lg:basis-1/2 flex flex-col space-y-4 justify-center">
					{#each services.groupOne as service}
						<ServiceCard {service} />
					{/each}
				</div>
				<div class="lg:basis-1/2 flex flex-col space-y-4 justify-center">
					{#each services.groupTwo as service}
						<ServiceCard {service} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
