<script>
	import CheckCircle from '~icons/tdesign/check-circle-filled';
	const principlesArr = [
		{
			title: 'Student-Centric Focus',
			description:
				'Students come first. Our commitment is to provide personalized guidance, ensuring each student accesses the best education tailored to their needs.'
		},
		{
			title: 'Revolutionizing Education Consultancy',
			description:
				'Founded by former students, we redefine the industry narrative, prioritizing individualized attention and free-of-charge services for every student.'
		},
		{
			title: 'Diversity and Inclusion Advocacy',
			description:
				'We champion diversity and inclusion, creating an environment where every student, regardless of background, finds tailored support for their unique educational journey.'
		},
		{
			title: 'Transparency and Integrity Commitment',
			description:
				'We are committed to transparency and integrity in all interactions. Our consultancy services are built on trust, ensuring students receive honest and reliable guidance'
		}
	];
</script>

<section id="PrinciplesAndValues" class="py-16">
	<div
		class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 mx-auto max-w-[30rem] lg:max-w-[100rem] px-4 sm:px-12"
	>
		<!-- text -->
		<div class="lg:basis-1/2">
			<h1 class="text-3xl/snug lg:text-4xl/snug font-bold text-secondary">
				Our core values and principles
			</h1>
			<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-4">
				At RA Global, we are deeply committed to providing personalized guidance and empowering
				students on their educational journey. Discover a transformative approach that aligns with
				your academic goals and sets the stage for educational success.
			</p>
			<div class="lg:w-3/4 flex flex-col space-y-4 py-4">
				{#each principlesArr as p}
					<div>
						<div>
							<CheckCircle class="text-success inline-block align-text-top" />
							<h1 class="font-semibold text-primary text-base xl:text-lg inline-block">
								{p.title}
							</h1>
						</div>
						<p class=" font-normal text-sm/relaxed xl:text-base/relaxed ms-6">
							{p.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
		<!-- image -->
		<div class="lg:basis-1/2">
			<img src="/images/principles.png" alt="principles and values" class="ms-auto" />
		</div>
	</div>
</section>

<style>
</style>
