<script>
	import Pill from '$lib/components/Pill.svelte';
	import Button from '$lib/components/Button.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import StudentTestimonyCard from '$lib/components/StudentTestimonyCard.svelte';
	import { routes } from '$lib/stores';
	import { text } from '@sveltejs/kit';
	import CheckCircle from '~icons/tdesign/check-circle-filled';
	import Certificate from '~icons/tabler/certificate';

	const servicesExpectations = [
		'Tailored Scholarship Guidance',
		'University Placement Expertise',
		'Educational Program Recommendations',
		'Application and Documentation Assistance',
		'Career Path Counseling',
		'Continuous Support'
	];

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
			question: 'How can RA Global assist in finding the right scholarship?',
			answer:
				'RA Global specializes in personalized guidance, tailoring scholarship searches to match your academic and career aspirations, ensuring you access opportunities that align with your goals.'
		},
		{
			question: 'What types of universities does RA Global collaborate with?',
			answer:
				'We collaborate with a diverse range of universities across Asia, ensuring access to esteemed institutions that offer a variety of academic programs.'
		},
		{
			question: 'How does RA Global support the application process?',
			answer:
				'Our support extends from document preparation to application submission, ensuring a seamless process and maximizing your chances of successful admission.'
		},
		{
			question: 'What sets RA Global apart in student recruitment strategies?',
			answer:
				'RA Global employs targeted marketing, on-ground events, and strategic outreach to attract top-tier students, creating a robust and diverse student community for our partner universities.'
		},
		{
			question: "Is there a cost for RA Global's application support services?",
			answer:
				"No, RA Global's application support services are entirely free of charge. Our commitment is to provide accessible and comprehensive assistance to students seeking educational opportunities."
		}
	];
</script>

<main id="homePage">
	<!-- hero section -->
	<section id="Hero" class=" px-56 flex pt-4 pb-24">
		<!-- left panel -->
		<div class="w-1/2">
			<Pill text="Welcome to RA Global" />
			<h1 class=" text-7xl font-bold pb-4 text-secondary">Bridging Borders,</h1>
			<h1 class="text-7xl font-bold pb-8 text-secondary">Fostering Futures</h1>
			<p class=" text-2xl w-3/4 leading-relaxed">
				RA Global leads North Africa in connecting students to educational opportunities in Asia. As
				the key link between these regions, we provide personalized education, emphasizing
				individual strengths and fostering academic excellence.
			</p>
			<Button text="Enroll today" nav="/contact" />
		</div>
		<!-- right panel  -->
		<div class="w-1/2">
			<img src="/images/hero.png" alt="hero" class="w-full" />
		</div>
	</section>

	<!-- services section  -->
	<section id="Services" class="bg-base-200 px-56 py-20">
		<h1
			class=" text-center text-5xl w-3/4 mx-auto leading-relaxed text-secondary font-semibold pb-12"
		>
			Empowering Your Academic Journey with Expert Guidance and Opportunities.
		</h1>
		<p class=" text-2xl w-1/2 mx-auto text-center leading-relaxed">
			We are your partners in academic excellence, offering personalized services to connect you
			with tailored scholarship and educational opportunities. Our commitment is to guide you
			through the process, ensuring you access meaningful learning experiences on your journey to
			success.
		</p>
		<!-- first row  -->
		<div class="flex justify-center space-x-24 pt-24">
			<div class="flex space-x-4">
				<CheckCircle class="w-8 h-8 text-success" />
				<p class=" text-xl">Tailored Guidance</p>
			</div>
			<div class="flex space-x-4">
				<CheckCircle class="w-8 h-8 text-success" />
				<p class=" text-xl">Individualized Attention</p>
			</div>
			<div class="flex space-x-4">
				<CheckCircle class="w-8 h-8 text-success" />
				<p class=" text-xl">Specialized Programs</p>
			</div>
		</div>
		<!-- second row  -->
		<div class="flex justify-center space-x-24 pt-6">
			<div class="flex space-x-4">
				<CheckCircle class="w-8 h-8 text-success" />
				<p class=" text-xl">Inclusive Community</p>
			</div>
			<div class="flex space-x-4">
				<CheckCircle class="w-8 h-8 text-success" />
				<p class=" text-xl">Seasoned Professionals</p>
			</div>
		</div>

		<!-- service one  -->
		<div class="flex pt-24">
			<div class="w-1/2">
				<img src="/images/serviceOne.png" alt="service one" class="w-3/4" />
			</div>
			<div class="w-1/2 flex flex-col justify-center">
				<Pill text="Unlocking Educational Paths" />
				<h1 class=" text-5xl font-bold pb-12 pt-4 text-secondary">Scholarship Opportunities</h1>
				<p class=" text-2xl leading-relaxed">
					Our mission is to guide you through a personalized approach, connecting you with diverse
					scholarship and educational opportunities tailored to your aspirations.
				</p>
				<Button text="Learn more" nav="/about" />
			</div>
		</div>

		<!-- service two  -->
		<div class="flex pt-4">
			<div class="w-1/2 flex flex-col justify-center">
				<Pill text="Your Educational Haven" />
				<h1 class=" text-5xl font-bold pb-12 pt-4 text-secondary">Gateway to Academic Success</h1>
				<p class=" text-2xl leading-relaxed">
					We specialize in forging connections with esteemed universities, providing you access to
					state-of-the-art educational programs. Our expert guidance and tailored support propel you
					towards a future of unparalleled educational achievement.
				</p>
				<Button text="Learn more" nav="/about" />
			</div>
			<div class="w-1/2">
				<img src="/images/serviceTwo.png" alt="service two" class="w-3/4 ms-auto" />
			</div>
		</div>
	</section>

	<!-- meet the team section  -->
	<section id="Team" class="bg-base-300 px-56 py-24">
		<div class="flex space-x-24">
			<!-- qoussay photo -->
			<div class="w-1/4 text-center">
				<img src="/images/qoussay.png" alt="qoussay" class="w-full" />
				<h1 class="text-2xl pt-4 font-medium">Qoussay El Akkari</h1>
				<h2 class="text-2xl text-secondary">Managing Partner</h2>
			</div>
			<!-- aziz photo  -->
			<div class="w-1/4 mt-80 text-center">
				<img src="/images/aziz.png" alt="aziz" class="w-full" />
				<h1 class="text-2xl pt-4 font-medium">Aziz Rezgani</h1>
				<h2 class="text-2xl text-secondary">Managing Partner</h2>
			</div>
			<div class="w-1/2">
				<Pill text="You are in good hands" />
				<h1 class=" text-6xl font-bold pb-10 pt-3 text-secondary">
					Meet the faces behind RA Global
				</h1>
				<p class="text-2xl leading-relaxed">
					We bring professionalism and dedication to redefine education consultancy. Our mission is
					to revolutionize the industry and set new standards, taking North Africa on an
					extraordinary journey toward academic excellence.
				</p>
				<div class="bg-base-200 rounded-2xl p-12 mt-12 text-xl shadow-lg relative">
					<Certificate
						class="w-12 h-12 p-2 rounded-2xl bg-primary text-white absolute -top-6 start-12 shadow-md"
					/>
					<h1 class="text-secondary font-semibold mb-4">
						At RA Global, we pride ourselves on the quality of our services.<br />You can expect the
						following from us:
					</h1>
					{#each servicesExpectations as e}
						<div class="flex py-3 space-x-4">
							<CheckCircle class="w-8 h-8 text-success" />
							<p>{e}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- what we offer our partners section  -->
	<section id="Partnerships" class="bg-base-300 px-56 py-24">
		<Pill text="Strategic Academic Partnerships" />
		<h1 class=" text-6xl font-bold pb-10 pt-3 text-secondary w-1/2">
			Elevating Asian Universities in North Africa
		</h1>
		<p class="text-2xl leading-relaxed w-1/2">
			We offer dynamic partnerships to leading Asian universities, enhancing their influence in the
			vibrant North African market. From tailored marketing strategies to impactful on-ground
			events, we navigate the educational landscape, redefining academic success together with our
			partners.
		</p>
		<div class="flex space-x-24 -mt-12">
			<div class="w-1/2 flex flex-col justify-center">
				<div class="bg-base-100 rounded-2xl p-12 text-xl shadow-lg">
					<h1 class="text-secondary font-semibold mb-4 text-4xl">Tailored Marketing Strategies</h1>
					<p class="text-xl leading-relaxed">
						Elevate your university's brand in North Africa with customized marketing plans designed
						to resonate with diverse audiences.
					</p>
					<img src="/images/partnerPhotoOne.png" alt="partner event" class="mt-12" />
					<Button text="Learn More" nav="/partners" />
				</div>
			</div>
			<div class="w-1/2 flex flex-col space-y-24">
				<div class="bg-base-200 rounded-2xl p-12 text-xl shadow-lg">
					<h1 class="text-secondary font-semibold mb-4 text-4xl">Strategic Student Recruitment</h1>
					<p class="text-xl leading-relaxed">
						Harness our expertise to attract top-tier students to your programs, ensuring a robust
						and diverse student body.
					</p>
					<img src="/images/partnerPhotoThree.png" alt="partner event" class="mt-12" />
					<Button text="Learn More" nav="/partners" />
				</div>

				<div class="bg-base-200 rounded-2xl p-12 text-xl shadow-lg">
					<h1 class="text-secondary font-semibold mb-4 text-4xl">Impactful On-Ground Events</h1>
					<p class="text-xl leading-relaxed">
						Create a lasting impression through our meticulously planned on-ground events, fostering
						meaningful connections between your institution and the North African community.
					</p>
					<img src="/images/partnerPhotoTwo.png" alt="partner event" class="mt-12" />
					<Button text="Learn More" nav="/partners" />
				</div>
			</div>
		</div>
	</section>

	<!-- testimonies section  -->
	<section id="Testimonies" class="bg-secondary-highlight py-36 px-24 text-white">
		<h1 class=" text-6xl font-bold pb-10 pt-3 mx-auto text-center w-1/2">
			See what students are saying about us
		</h1>
		<p class="text-2xl leading-relaxed w-1/2 mx-auto text-center">
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
	<section id="FAQ" class="bg-base-200 py-36 px-96">
		<h1 class=" text-6xl font-bold pb-10 pt-3 text-secondary">Frequently asked questions</h1>
		<p class="text-2xl leading-relaxed w-3/4">
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
	#Hero {
		background: linear-gradient(to bottom, #e9efff 0%, #e9efff 90%, #fffdfa 100%);
	}
</style>
