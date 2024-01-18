<script>
	import PatterenedImage from '$lib/components/PatterenedImage.svelte';
</script>

<section id="AboutServices" class="bg-base-300 px-4 sm:px-12">
	<div class="mx-auto max-w-[40rem] lg:max-w-[100rem]">
		<!-- first service -->
		<div class="flex flex-col lg:flex-row-reverse">
			<!-- image -->
			<div class="lg:w-1/2 bg-redCircle bg-contain bg-right bg-no-repeat py-8 pe-8">
				<div class="relative">
					<img
						src="/images/patterns/secondaryDots.png"
						alt="blue dots"
						class="absolute -top-4 -end-4 w-1/4"
					/>
				</div>
				<img src="/images/about5.png" alt="about service one" class="lg:ms-auto w-full lg:w-3/4" />
			</div>
			<!-- title and description -->
			<div class="lg:w-1/2 my-auto">Hey</div>
		</div>
		<!-- Second service -->
		<div class="flex flex-col lg:flex-row">
			<!-- image -->
			<div class="lg:w-1/2 bg-yellowCircle bg-contain bg-left bg-no-repeat py-8 ps-8">
				<div class="relative">
					<img
						src="/images/patterns/primaryDots.png"
						alt="blue dots"
						class="absolute -top-4 -start-4 w-1/4"
					/>
				</div>
				<img src="/images/about5.png" alt="about service one" class="lg:me-auto w-full lg:w-3/4" />
			</div>
			<!-- title and description -->
			<div class="lg:w-1/2 my-auto">Hey</div>
		</div>
		<!-- third service -->
		<div class="flex flex-col lg:flex-row-reverse">
			<!-- image -->
			<div class="lg:w-1/2 bg-blueCircle bg-contain bg-right bg-no-repeat py-8 pe-8">
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
			<div class="lg:w-1/2 my-auto">Hey</div>
		</div>
	</div>
</section>

<style></style>
