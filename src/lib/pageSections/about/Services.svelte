<script>
	import Pill from '$lib/components/Pill.svelte';
	import { text } from '@sveltejs/kit';
</script>

<section id="AboutServices" class=" bg-base-200 py-8">
	<div
		class="mx-auto max-w-[30rem] lg:max-w-[100rem] flex flex-col px-4 sm:px-12 space-y-14 lg:space-y-24"
	>
		<!-- title -->
		<div class="mx-auto lg:w-2/3">
			<h1
				class="font-bold text-secondary text-3xl/snug lg:text-4xl/snug xl:text-5xl/snug text-center relative z-20"
			>
				A Gateway for Every Student's
				<div class="mx-auto">Educational Journey</div>
			</h1>
			<img
				src="/images/patterns/accentHighlight.png"
				alt="yellow highlight"
				class="h-6 xl:h-8 w-full max-w-[18rem] lg:max-w-[21rem] xl:max-w-[29rem] mx-auto relative -top-2 lg:-top-3"
			/>
		</div>
		<!-- first service -->
		<div class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row-reverse">
			<!-- image -->
			<div
				class="lg:basis-1/2 lg:bg-redCircle lg:bg-contain lg:bg-center lg:bg-no-repeat lg:py-8 lg:h-fit lg:my-auto"
			>
				<div class="relative">
					<img
						src="/images/patterns/secondaryDots.png"
						alt="blue dots"
						class="absolute -top-4 -end-4 w-1/4"
					/>
				</div>
				<img
					src="/images/aboutService1.png"
					alt="about service one"
					class="lg:ms-auto w-full lg:w-3/4"
				/>
			</div>
			<!-- title and description -->
			<div class="lg:basis-1/2 my-auto">
				<Pill text="Compassionate. Visionary. Empowering." />
				<h1 class="text-2xl/tight lg:text-3xl/snug xl:text-4xl/snug font-bold text-secondary">
					Cultivating Compassionate and Visionary Leaders
				</h1>
				<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-4">
					At RA Global, we are dedicated to nurturing compassionate and visionary leaders with a
					global perspective. Our founders, who once navigated the educational challenges in North
					Africa, bring a deep understanding of the region's unique dynamics. With a commitment to
					revolutionizing the educational consultancy landscape, we strive to provide students in
					Tunisia and beyond with unparalleled guidance and support for their educational journey.
					Our services are driven by empathy and foresight, reflecting our unwavering dedication to
					prioritizing students' needs above all else.
				</p>
			</div>
		</div>
		<!-- Second service -->
		<div class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row">
			<!-- image -->
			<div
				class="lg:basis-1/2 lg:bg-blueCircle lg:bg-contain lg:bg-center lg:bg-no-repeat lg:py-8 lg:h-fit lg:my-auto"
			>
				<div class="relative">
					<img
						src="/images/patterns/accentDots.png"
						alt="blue dots"
						class="absolute -top-4 -start-4 w-1/4"
					/>
				</div>
				<img
					src="/images/aboutService3.png"
					alt="about service one"
					class="lg:me-auto w-full lg:w-3/4"
				/>
			</div>
			<!-- title and description -->
			<div class="lg:basis-1/2 my-auto">
				<Pill text="Supportive Ecosystem" />
				<h1 class="text-2xl/tight lg:text-3xl/snug xl:text-4xl/snug font-bold text-secondary">
					Elevating Educational Experiences Through Personalized Support
				</h1>
				<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-4">
					At RA Global, we believe in providing each student with the personalized attention they
					deserve within our supportive consultancy ecosystem. Through our exclusive partnerships
					with renowned universities, we are committed to empowering students to achieve academic
					excellence. Our dedication goes beyond traditional advisory services – we actively strive
					to secure scholarships covering up to 100% of tuition fees, ensuring that financial
					constraints never hinder your educational ambitions. Choose RA Global for an educational
					journey where tailored support fosters an environment conducive to realizing your
					aspirations.
				</p>
			</div>
		</div>
		<!-- third service -->
		<div class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row-reverse">
			<!-- image -->
			<div
				class="lg:basis-1/2 lg:bg-yellowCircle lg:bg-contain lg:bg-center lg:bg-no-repeat lg:py-8 lg:h-fit lg:my-auto"
			>
				<div class="relative">
					<img
						src="/images/patterns/primaryDots.png"
						alt="blue dots"
						class="absolute -top-4 -end-4 w-1/4"
					/>
				</div>
				<img
					src="/images/aboutService2.png"
					alt="about service one"
					class="lg:ms-auto w-full lg:w-3/4"
				/>
			</div>
			<!-- title and description -->
			<div class="lg:basis-1/2 my-auto">
				<Pill text="Empowering Your Journey Abroad" />
				<h1 class="text-2xl/tight lg:text-3xl/snug xl:text-4xl/snug font-bold text-secondary">
					Comprehensive Support for Your Educational Journey
				</h1>
				<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-4">
					At RA Global, we recognize the profound impact of studying abroad and the challenges of
					acclimating to a new environment. Our commitment extends beyond academic support,
					encompassing a comprehensive range of services tailored to your individual journey. From
					academic guidance to invaluable advice and curated experiences such as trips and
					activities, we are dedicated to smoothing your transition and facilitating your success.
					With RA Global by your side, embark on your educational journey with confidence, reassured
					by the knowledge that you have a dedicated partner supporting you at every turn.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="Community" class="bg-neutral py-12">
	<div class="mx-auto max-w-[30rem] lg:max-w-[100rem] px-4 sm:px-12 text-center">
		<h1 class="font-bold text-accent text-2xl/snug lg:text-3xl/snug xl:text-4xl/snug my-4">
			Embracing Community, Cultivating Connections
		</h1>
		<p class="text-white lg:w-2/3 lg:mx-auto text-base/relaxed xl:text-lg/relaxed mt-4">
			At RA Global, we're more than just an educational consultancy – we're a family. Our vibrant
			and inclusive community brings together individuals from diverse backgrounds, fostering
			meaningful connections and unforgettable experiences. Join us as we embark on a journey of
			discovery and adventure, creating lasting memories.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
			<img src="/images/community1.png" alt="community one" class="mx-auto" />
			<img src="/images/community2.png" alt="community two" class="mx-auto" />
			<img src="/images/community3.png" alt="community three" class="mx-auto" />
			<img src="/images/community4.png" alt="community four" class="mx-auto" />
		</div>
	</div>
</section>

<style>
</style>
