<script>
	import Button from './Button.svelte';
	import Pill from './Pill.svelte';
</script>

<section id="PartnerServices" class="py-20">
	<div class="max-w-[100rem] px-8 mx-auto flex flex-col">
		<!-- general idea  -->
		<div class="flex flex-col text-center w-full lg:w-3/4 mx-auto">
			<div class="flex justify-center">
				<Pill text="Strategic Academic Partnerships" />
			</div>
			<h1 class="font-bold text-secondary text-3xl/snug lg:text-4xl/snug xl:text-5xl/snug">
				Elevating Asian Universities in North Africa
			</h1>
			<p class="font-medium text-base xl:text-lg my-8">
				We offer dynamic partnerships to leading Asian universities, enhancing their influence in
				the vibrant North African market. From tailored marketing strategies to impactful on-ground
				events, we navigate the educational landscape, redefining academic success together with our
				partners.
			</p>
		</div>
		<!-- services grid  -->
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
			<!-- service one  -->
			<div class="flex flex-col bg-base-100 rounded-2xl shadow-md p-8">
				<!-- title  -->
				<h1 class="font-bold text-secondary text-xl xl:text-2xl">Impactful On-Ground Events</h1>
				<!-- description  -->
				<p class="font-medium text-base xl:text-lg my-8 grow">
					Create a lasting impression through our meticulously planned on-ground events, fostering
					meaningful connections between your institution and the North African community.
				</p>
				<!-- image  -->
				<img src="/images/partnerPhotoTwo.png" alt="partner event" class="mb-8" />
				<!-- cta  -->
				<Button text="Learn More" nav="/partners" />
			</div>
			<!-- service two  -->
			<div class="flex flex-col bg-base-200 rounded-2xl shadow-md p-8">
				<!-- title  -->
				<h1 class="font-bold text-secondary text-xl xl:text-2xl">Strategic Student Recruitment</h1>
				<!-- description  -->
				<p class="font-medium text-base xl:text-lg my-8 grow">
					Harness our expertise to attract top-tier students to your programs, ensuring a robust and
					diverse student body.
				</p>
				<!-- image  -->
				<img src="/images/partnerPhotoThree.png" alt="partner event" class="mb-8" />
				<!-- cta  -->
				<Button text="Learn More" nav="/partners" />
			</div>
			<!-- service three  -->
			<div class="flex flex-col bg-base-100 rounded-2xl shadow-md p-8">
				<!-- title  -->
				<h1 class="font-bold text-secondary text-xl xl:text-2xl">Tailored Marketing Strategies</h1>
				<!-- description  -->
				<p class="font-medium text-base xl:text-lg my-8 grow">
					Elevate your university's brand in North Africa with customized marketing plans designed
					to resonate with diverse audiences.
				</p>
				<!-- image  -->
				<img src="/images/partnerPhotoOne.png" alt="partner event" class="mb-8" />
				<!-- cta  -->
				<Button text="Learn More" nav="/partners" />
			</div>
		</div>
	</div>
</section>

<style>
	#PartnerServices {
		background: linear-gradient(to bottom, #f3f0ed 0%, #f3f0ed 80%, #fff6eb 100%);
	}
</style>
