<script>
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Team from '$lib/components/Team.svelte';
	import PartnerServices from '$lib/components/PartnerServices.svelte';
	import Pill from '$lib/components/Pill.svelte';
	import Button from '$lib/components/Button.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import StudentTestimonyCard from '$lib/components/StudentTestimonyCard.svelte';
	import { text } from '@sveltejs/kit';

	const studentTestimonies = [
		{
			name: 'Karimene Turki',
			image: 'karimene.jpg',
			stars: 5,
			quote:
				'RA Global played a pivotal role in guiding me toward a scholarship that perfectly aligned with my academic goals. Their personalized approach and unwavering support made the entire process seamless and rewarding',
			bgColor: 'bg-base-100'
		},
		{
			name: 'Adem Ghanmi',
			image: 'adem.jpg',
			stars: 5,
			quote:
				'Choosing RA Global was a game-changer for me. Their expertise not only secured me a spot in a prestigious Asian university but also opened doors to unique opportunities. Grateful for the tailored guidance that set my educational journey on the path to success.',
			bgColor: 'bg-base-200'
		},
		{
			name: 'Shathe Khalouaoui',
			image: 'shathe.jpg',
			stars: 5,
			quote:
				'RA Global exceeded my expectations in every aspect. From helping me explore scholarship options to facilitating a smooth enrollment process, their commitment to my academic success was evident. I highly recommend their services to any student aspiring for excellence.',
			bgColor: 'bg-base-300'
		}
	];

	const faqArray = [
		{
			question: 'Q: How can RA Global assist in finding the right scholarship?',
			answer:
				'A: RA Global specializes in personalized guidance, tailoring scholarship searches to match your academic and career aspirations, ensuring you access opportunities that align with your goals.'
		},
		{
			question: 'Q: What types of universities does RA Global collaborate with?',
			answer:
				'A: We collaborate with a diverse range of universities across Asia, ensuring access to esteemed institutions that offer a variety of academic programs.'
		},
		{
			question: 'Q: How does RA Global support the application process?',
			answer:
				'A: Our support extends from document preparation to application submission, ensuring a seamless process and maximizing your chances of successful admission.'
		},
		{
			question: 'Q: What sets RA Global apart in student recruitment strategies?',
			answer:
				'A: RA Global employs targeted marketing, on-ground events, and strategic outreach to attract top-tier students, creating a robust and diverse student community for our partner universities.'
		},
		{
			question: "Q: Is there a cost for RA Global's application support services?",
			answer:
				"A: No, RA Global's application support services are entirely free of charge. Our commitment is to provide accessible and comprehensive assistance to students seeking educational opportunities."
		}
	];
</script>

<main id="homePage">
	<Hero />
	<Services />
	<Team />
	<PartnerServices />
</main>

<main id="homePage" class="hidden">
	<!-- what we offer our partners section  -->
	<section id="Partnerships" class="bg-base-300 px-56 py-24">
		<div class="flex">
			<div class="w-1/2">
				<Pill text="Strategic Academic Partnerships" />
				<h1 class=" text-4xl 2xl:text-5xl font-bold pb-10 pt-3 text-secondary">
					Elevating Asian Universities in North Africa
				</h1>
				<p class="2xl:text-xl text-lg leading-relaxed">
					We offer dynamic partnerships to leading Asian universities, enhancing their influence in
					the vibrant North African market. From tailored marketing strategies to impactful
					on-ground events, we navigate the educational landscape, redefining academic success
					together with our partners.
				</p>
			</div>
			<div class="bg-base-200 rounded-2xl p-12 w-1/2 shadow-l 2xl:hidden ms-12">
				<h1 class="text-secondary font-semibold mb-4 text-3xl 2xl:text-4xl">
					Impactful On-Ground Events
				</h1>
				<p class="2xl:text-xl text-lg leading-relaxed">
					Create a lasting impression through our meticulously planned on-ground events, fostering
					meaningful connections between your institution and the North African community.
				</p>
				<img src="/images/partnerPhotoTwo.png" alt="partner event" class="2xl:mt-12 mt-8" />
				<Button text="Learn More" nav="/partners" />
			</div>
		</div>
		<div class="grid grid-cols-2 2xl:grid-cols-3 mt-12 gap-12">
			<div class="bg-base-200 rounded-2xl p-12 shadow-lg">
				<h1 class="text-secondary font-semibold mb-4 text-3xl 2xl:text-4xl">
					Strategic Student Recruitment
				</h1>
				<p class="2xl:text-xl text-lg leading-relaxed">
					Harness our expertise to attract top-tier students to your programs, ensuring a robust and
					diverse student body.
				</p>
				<img src="/images/partnerPhotoThree.png" alt="partner event" class="2xl:mt-12 mt-8" />
				<Button text="Learn More" nav="/partners" />
			</div>

			<div class="bg-base-100 rounded-2xl p-12 shadow-lg">
				<h1 class="text-secondary font-semibold mb-4 text-3xl 2xl:text-4xl">
					Tailored Marketing Strategies
				</h1>
				<p class="2xl:text-xl text-lg leading-relaxed">
					Elevate your university's brand in North Africa with customized marketing plans designed
					to resonate with diverse audiences.
				</p>
				<img src="/images/partnerPhotoOne.png" alt="partner event" class="2xl:mt-12 mt-8" />
				<Button text="Learn More" nav="/partners" />
			</div>

			<div class="bg-base-200 rounded-2xl p-12 shadow-l 2xl:block hidden">
				<h1 class="text-secondary font-semibold mb-4 text-3xl 2xl:text-4xl">
					Impactful On-Ground Events
				</h1>
				<p class="2xl:text-xl text-lg leading-relaxed">
					Create a lasting impression through our meticulously planned on-ground events, fostering
					meaningful connections between your institution and the North African community.
				</p>
				<img src="/images/partnerPhotoTwo.png" alt="partner event" class="2xl:mt-12 mt-8" />
				<Button text="Learn More" nav="/partners" />
			</div>
		</div>
	</section>

	<!-- testimonies section  -->
	<section id="Testimonies" class="bg-secondary-highlight 2xl:py-36 py-24 px-24 text-white hidden">
		<h1 class=" text-4xl 2xl:text-5xl font-bold pb-10 pt-3 mx-auto text-center w-1/2">
			See what students are saying about us
		</h1>
		<p class="2xl:text-xl text-lg leading-relaxed w-1/2 mx-auto text-center">
			Discover firsthand experiences shared by our students. Their stories illuminate the impact of
			our educational services, shaping success stories in their academic journeys.
		</p>
		<div class="grid grid-cols-3 space-x-12 mt-24">
			{#each studentTestimonies as t}
				<StudentTestimonyCard testimony={t} />
			{/each}
		</div>
	</section>

	<!-- Frequently Asked Questions -->
	<section id="FAQ" class="bg-base-200 py-36 2xl:px-96 px-64 hidden">
		<h1 class=" text-4xl 2xl:text-5xl font-bold pb-10 pt-3 text-secondary">
			Frequently asked questions
		</h1>
		<p class="2xl:text-xl text-lg leading-relaxed w-3/4">
			Explore our FAQ section for quick answers to common queries about our services, admissions,
			and support. Have a question not covered? Feel free to reach out, and we'll be happy to assist
			you!
		</p>
		{#each faqArray as f}
			<FAQ question={f.question} answer={f.answer} />
		{/each}
	</section>
</main>

<style>
</style>
