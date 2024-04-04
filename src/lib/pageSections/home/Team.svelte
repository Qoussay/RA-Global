<script>
	import Pill from '$lib/components/Pill.svelte';
	import Certificate from '~icons/tabler/certificate';
	import CheckCircle from '~icons/tdesign/check-circle-filled';

	const servicesExpectations = [
		'Tailored Scholarship Guidance',
		'University Placement Expertise',
		'Educational Program Recommendations',
		'Application and Documentation Assistance',
		'Career Path Counseling',
		'Continuous Support'
	];
</script>

<section id="Team" class="py-14 bg-base-100">
	<div
		class="flex flex-col lg:flex-row-reverse max-w-[100rem] px-4 sm:px-12 mx-auto space-y-12 lg:space-y-0"
	>
		<!-- description  -->
		<div class="flex flex-col justify-center lg:w-1/2 mx-auto max-w-[40rem] lg:max-w-[100rem]">
			<Pill text="You are in good hands" />
			<h1 class="font-bold text-secondary text-2xl/snug lg:text-3xl/snug xl:text-4xl/snug">
				Meet the faces behind RA Global
			</h1>
			<p class="font-medium text-base/relaxed xl:text-lg/relaxed my-4">
				We bring professionalism and dedication to redefine education consultancy in Tunisia. Our mission is to
				revolutionize the industry and set new standards, taking North Africa on an extraordinary
				journey toward academic excellence.
			</p>

			<div class="bg-base-200 rounded-2xl p-8 lg:p-12 shadow-lg relative mt-10">
				<Certificate
					class="w-11 xl:w-12 h-11 xl:h-12 p-2 rounded-2xl bg-accent text-white absolute -top-5 xl:-top-6 start-12 shadow-md"
				/>
				<h1 class="text-secondary font-semibold mb-4 mt-2 lg:mt-0 text-base xl:text-lg">
					At RA Global, we pride ourselves on the quality of our services.<br />You can expect the
					following from us:
				</h1>
				{#each servicesExpectations as e}
					<div class="flex py-3 2xl:space-x-4 space-x-3">
						<CheckCircle class="2xl:h-8 h-6 text-success w-1/12 my-auto" />
						<p class="font-medium text-sm md:text-base xl:text-lg w-11/12">{e}</p>
					</div>
				{/each}
			</div>
		</div>
		<!-- founders photos  -->
		<div
			class="flex flex-row lg:w-1/2 mx-auto space-x-12 lg:space-x-0 max-w-[40rem] lg:max-w-[100rem]"
		>
			<!-- qoussay photo  -->
			<div class="basis-1/2">
				<img src="/images/qoussay.png" alt="qoussay" class="lg:w-3/4 mx-auto" />
				<h1 class="text-center text-base sm:text-lg xl:text-xl font-semibold text-secondary mt-3">
					Qoussay El Akkari
				</h1>
				<h2 class="text-center text-sm sm:text-base xl:text-lg font-medium">Managing Partner</h2>
			</div>
			<!-- aziz photo  -->
			<div class="basis-1/2 lg:mt-auto">
				<img src="/images/aziz.png" alt="aziz" class="lg:w-3/4 mx-auto" />
				<h1 class="text-center text-base sm:text-lg xl:text-xl font-semibold text-secondary mt-3">
					Aziz Rezgani
				</h1>
				<h2 class="text-center text-sm sm:text-base xl:text-lg font-medium">Managing Partner</h2>
			</div>
		</div>
	</div>
</section>

<style>
</style>
