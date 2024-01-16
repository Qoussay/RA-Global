<script>
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<section id="Navbar" class="max-w-[100rem] px-4 sm:px-8 mx-auto">
	<div class="flex flex-row lg:flex-col">
		<div class="flex flex-row grow lg:grow-0 py-4 xl:py-6 border-b-0 lg:border-b-2 border-base-110">
			<!-- company logo  -->
			<div class="grow">
				<img src="/images/fullRed.png" alt="company logo" class="w-36 lg:w-44 xl:w-48" />
			</div>
			<div class="lg:flex lg:flex-row lg:space-x-12 hidden">
				<ContactInfo type="email" />
				<ContactInfo type="phone" />
			</div>
		</div>
		<!-- navigation links  -->
		<Navigation />
	</div>
</section>
