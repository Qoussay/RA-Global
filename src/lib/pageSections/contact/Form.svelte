<script>
	import Pill from '$lib/components/Pill.svelte';
	import Form from '$lib/components/Form.svelte';
</script>

<section id="ContactForm" class="py-8">
	<div
		class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row mx-auto max-w-[30rem] lg:max-w-[100rem] px-8 sm:px-12"
	>
		<!-- text and title  -->
		<div class="lg:basis-1/2 flex flex-col justify-center">
			<Pill text="Contact Us Today" />
			<h1
				class="font-bold text-secondary text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight lg:w-3/4"
			>
				We'd love to hear from you
			</h1>
			<p class="lg:w-3/4 py-2 font-medium text-base xl:text-lg">
				Your voice matters, and we are here to provide personalized guidance and support on your
				educational journey. Reach out today – let's shape your path to success together.
			</p>
		</div>
		<!-- form  -->
		<div class="lg:basis-1/2">
			<Form />
		</div>
	</div>
</section>

<style>
	#ContactForm {
		background: linear-gradient(to bottom, #fff9f3 0%, #fff9f3 85%, #32326a 85%, #32326a 100%);
	}
</style>
