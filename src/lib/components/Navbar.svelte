<script>
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<section id="Navbar" class="2xl:px-36 md:px-8 px-4">
	<div class="flex flex-row lg:flex-col">
		<div class="flex flex-row grow lg:grow-0 py-4 border-b-0 lg:border-b-2 border-base-110">
			<!-- company logo  -->
			<div class="grow">
				<img src="/images/fullRed.png" alt="company logo" class="w-36 lg:w-44 xl:w-52" />
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
