<script>
	import '../app.css';
	import Navbar from '$lib/pageSections/Navbar.svelte';
	import Button from '$lib/components/Button.svelte';
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import FacebookIcon from '~icons/ic/round-facebook';
	import InstagramIcon from '~icons/ri/instagram-fill';
	import LinkedInIcon from '~icons/ion/logo-linkedin';

	const facebookUrl = 'https://www.facebook.com/raglobal.tn';
	const instagramUrl = 'https://www.instagram.com/raglobal.tn/';
	const linkedinUrl = 'https://www.linkedin.com/company/raglobaltn';

	const routes = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Partners',
			path: '/partners'
		},
		{
			name: 'Contact us',
			path: '/contact'
		}
	];
</script>

<svelte:head>
	<!-- This site is converting visitors into subscribers and customers with https://respond.io --><!-- This site is converting visitors into subscribers and customers with https://respond.io -->
	<!-- This site is converting visitors into subscribers and customers with https://respond.io -->
	<!-- This site is converting visitors into subscribers and customers with https://respond.io -->
	<!-- This site is converting visitors into subscribers and customers with https://respond.io -->
	<script
		id="respondio__growth_tool"
		src="https://cdn.respond.io/widget/widget.js?wId=9e9ab37f-1ebc-49b4-85ef-7fa993cf3524"
	></script><!-- https://respond.io -->
</svelte:head>

<Navbar />

<slot />

<!-- brand logo section -->
<section id="BrandLogo" class="bg-base-100 flex flex-col justify-center py-12 lg:py-20">
	<img src="/images/hatRed.png" alt="brand logo" class="w-36 lg:w-40 xl:w-52 mx-auto" />
	<h1
		class="font-bold text-secondary text-center text-3xl/tight lg:text-3xl/tight xl:text-4xl/tight mb-8 mt-4"
	>
		Bridging Borders,<br />Fostering Futures
	</h1>
	<div class="mx-auto w-fit">
		<Button text="Contact Us" nav="/contact" />
	</div>
</section>

<!-- footer  -->
<footer class="bg-base-200 pb-8 pt-12 px-4 lg:px-8 font-medium">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-8">
		<!-- brand logo and social links  -->
		<div class="md:col-span-2">
			<img src="/images/fullRed.png" alt="brand logo" class="w-40 lg:w-44" />
			<p class="text-sm/relaxed lg:text-base/relaxed mt-5 mb-4 lg:w-3/4">
				RA Global is a leading education consultancy firm, connecting North African students to
				tailored scholarship and educational opportunities in Asia.
			</p>
			<div class="flex space-x-4">
				<a href={facebookUrl}>
					<FacebookIcon class="w-8 xl:w-10 h-8 xl:h-10 p-2 rounded-full bg-accent text-white" /></a
				>
				<a href={instagramUrl}>
					<InstagramIcon class="w-8 xl:w-10 h-8 xl:h-10 p-2 rounded-full bg-accent text-white" /></a
				>
				<a href={linkedinUrl}>
					<LinkedInIcon class="w-8 xl:w-10 h-8 xl:h-10 p-2 rounded-full bg-accent text-white" /></a
				>
			</div>
		</div>
		<!-- site link  -->
		<div>
			<h1 class="text-secondary font-semibold text-base lg:text-lg">Site Links</h1>
			<div class="flex flex-col space-y-2 mt-4">
				{#each routes as r}
					<a
						class="text-sm lg:text-base border-b-2 border-b-neutral last:border-b-0 md:w-3/4 pb-2 hover:text-secondary-highlight font-medium"
						href={r.path}>{r.name}</a
					>
				{/each}
			</div>
		</div>
		<!-- contact us details  -->
		<div>
			<h1 class="text-secondary font-semibold text-base lg:text-lg">Contact us</h1>
			<div class="flex flex-col space-y-4 xl:space-y-8 mt-4 xl:mt-8">
				<ContactInfo />
				<ContactInfo type="phone" />
			</div>
		</div>
	</div>
	<!-- divider  -->
	<hr class="border-neutral lg:my-6 my-4" />
	<!-- credits  -->
	<p class="text-xs sm:text-sm lg:text-base">© 2024 Rezgani Akkari Global. All rights reserved.</p>
</footer>

<style>
	footer h1::after {
		display: block;
		content: '';
		background-color: #fbaf4d;
		height: 5px;
		width: 10%;
		border-radius: 25px;
		margin-top: 0.5%;
		margin-bottom: 3%;
	}

	@media (max-width: 1280px) {
		footer h1::after {
			display: block;
			content: '';
			background-color: #fbaf4d;
			height: 3px;
			width: 10%;
			border-radius: 25px;
			margin-top: 1%;
			margin-bottom: 3%;
		}
	}
</style>
