<script>
	import StudentTestimonyCard from './StudentTestimonyCard.svelte';

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
</script>

<section id="Testimonies" class="py-24 bg-primary-highlight">
	<div class="max-w-[100rem] px-8 mx-auto flex flex-col">
		<!-- general idea  -->
		<div class="flex flex-col text-center w-full lg:w-3/4 mx-auto">
			<h1 class="font-bold text-neutral text-3xl/snug lg:text-4xl/snug xl:text-5xl/snug">
				See what students are saying about us
			</h1>
			<p class="font-medium text-base-200 text-base xl:text-lg my-8">
				Discover firsthand experiences shared by our students. Their stories illuminate the impact
				of our educational services, shaping success stories in their academic journeys.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
			{#each studentTestimonies as t}
				<StudentTestimonyCard testimony={t} />
			{/each}
		</div>
	</div>
</section>

<style></style>
