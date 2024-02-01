<script>
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<section id="Navbar" class="max-w-[100rem] px-4 sm:px-12 mx-auto">
	<div class="flex flex-row justify-between lg:flex-col">
		<div
			class="flex flex-row justify-between py-4 lg:py-4 xl:py-5 border-b-0 lg:border-b-2 border-base-110"
		>
			<!-- company logo  -->

			<a href="/">
				<img src="/images/fullRed.png" alt="company logo" class="w-36 lg:w-40 xl:w-42" />
			</a>

			<div class="lg:flex lg:flex-row lg:space-x-12 hidden">
				<ContactInfo type="email" />
				<ContactInfo type="phone" />
			</div>
		</div>
		<!-- navigation links  -->
		<Navigation />
	</div>
</section>
