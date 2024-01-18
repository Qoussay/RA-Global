<script>
	import Pill from '$lib/components/Pill.svelte';
	import { text } from '@sveltejs/kit';
</script>

<section id="AboutServices" class="bg-base-300 px-4 sm:px-12">
	<div class="mx-auto max-w-[30rem] lg:max-w-[100rem] flex flex-col space-y-14 lg:space-y-24">
		<!-- first service -->
		<div class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row-reverse">
			<!-- image -->
			<div
				class="lg:w-1/2 lg:bg-redCircle lg:bg-contain lg:bg-center lg:bg-no-repeat lg:py-8 lg:h-fit lg:my-auto"
			>
				<div class="relative">
					<img
						src="/images/patterns/secondaryDots.png"
						alt="blue dots"
						class="absolute -top-4 -end-4 w-1/4"
					/>
				</div>
				<img src="/images/about4.png" alt="about service one" class="lg:ms-auto w-full lg:w-3/4" />
			</div>
			<!-- title and description -->
			<div class="lg:w-1/2 my-auto">
				<Pill text="Compassionate. Visionary. Empowering." />
				<h1 class="text-2xl/tight lg:text-3xl/snug xl:text-4xl/snug font-bold text-secondary">
					Nurturing Caring and Responsible Global Leaders
				</h1>
				<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-8">
					At RA Global, we embark on a mission to shape compassionate and responsible global
					leaders. Our founders, former students themselves, understand the challenges faced by
					students in North Africa. We're committed to revolutionizing the educational consultancy
					scene, ensuring every student receives the best guidance and support for a well-rounded
					education. Our services, driven by empathy and vision, are entirely free, reflecting our
					dedication to putting students' needs first.
				</p>
			</div>
		</div>
		<!-- Second service -->
		<div class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row">
			<!-- image -->
			<div
				class="lg:w-1/2 lg:bg-yellowCircle lg:bg-contain lg:bg-center lg:bg-no-repeat lg:py-8 lg:h-fit lg:my-auto"
			>
				<div class="relative">
					<img
						src="/images/patterns/primaryDots.png"
						alt="blue dots"
						class="absolute -top-4 -start-4 w-1/4"
					/>
				</div>
				<img src="/images/about3.png" alt="about service one" class="lg:me-auto w-full lg:w-3/4" />
			</div>
			<!-- title and description -->
			<div class="lg:w-1/2 my-auto">
				<Pill text="Supportive Ecosystem" />
				<h1 class="text-2xl/tight lg:text-3xl/snug xl:text-4xl/snug font-bold text-secondary">
					Providing the Attention They Deserve
				</h1>
				<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-8">
					Within RA Global's supportive consultancy ecosystem, each student receives the
					individualized attention they deserve. Our commitment to empowering students is evident
					through exclusive partnerships with esteemed universities. We prioritize academic success,
					and our consultancy services extend beyond mere advice to securing scholarships of up to
					100%. Choose RA Global for an educational journey where personalized attention ensures
					your aspirations are nurtured in a conducive learning environment.
				</p>
			</div>
		</div>
		<!-- third service -->
		<div class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row-reverse">
			<!-- image -->
			<div
				class="lg:w-1/2 lg:bg-blueCircle lg:bg-contain lg:bg-center lg:bg-no-repeat lg:py-8 lg:h-fit lg:my-auto"
			>
				<div class="relative">
					<img
						src="/images/patterns/accentDots.png"
						alt="blue dots"
						class="absolute -top-4 -end-4 w-1/4"
					/>
				</div>
				<img src="/images/about5.png" alt="about service one" class="lg:ms-auto w-full lg:w-3/4" />
			</div>
			<!-- title and description -->
			<div class="lg:w-1/2 my-auto">
				<Pill text="Tailored Educational Journeys" />
				<h1 class="text-2xl/tight lg:text-3xl/snug xl:text-4xl/snug font-bold text-secondary">
					Crafting Personalized Education Programs
				</h1>
				<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-8">
					At RA Global, we believe in crafting personalized education programs for every child. Our
					dedication goes beyond industry norms, fueled by the journey of our founders who
					understand the transformative power of guidance. True to our mission, we redefine
					education consultancy in North Africa, promising a brighter future for students. With RA
					Global, your educational aspirations become our collective priority, ensuring each child's
					unique journey is shaped for success.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
</style>
