<script>
	import '../app.css';
	import MainBar from '$lib/components/MainBar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { routes } from '$lib/stores';
	import MailIcon from '~icons/ic/baseline-mail';
	import PhoneIcon from '~icons/ic/baseline-local-phone';
	import FacebookIcon from '~icons/tabler/brand-facebook';
	import InstagramIcon from '~icons/ph/instagram-logo';
	import LinkedInIcon from '~icons/ph/linkedin-logo';

	const facebookUrl = 'https://www.facebook.com/raglobal.tn';
	const instagramUrl = 'https://www.instagram.com/raglobal.tn/';
	const linkedinUrl = 'https://www.linkedin.com/company/raglobaltn';
</script>

<section id="navigation" class=" bg-base-100 px-56">
	<MainBar />
	<Navbar />
</section>

<slot />

<!-- brand logo section -->
<section id="BrandLogo" class="bg-base-300 py-36">
	<img src="/images/hatRed.png" alt="brand logo" class="w-80 mx-auto" />
	<h1 class="font-bold text-6xl text-secondary text-center leading-tight mt-8">
		Bridging Borders,<br />Fostering Futures
	</h1>
	<div class="mx-auto w-fit">
		<Button text="Enroll today" nav="/contact" />
	</div>
</section>

<!-- footer  -->
<footer class="bg-base-200 pt-24 pb-12 px-12 font-medium">
	<div class="grid grid-cols-4">
		<!-- brand logo and social links  -->
		<div class="col-start-1 col-span-2">
			<img src="/images/fullRed.png" alt="brand logo" class="w-56" />
			<p class="text-lg leading-relaxed mt-12 w-3/4">
				RA Global is a leading education consultancy firm, connecting North African students to
				tailored scholarship and educational opportunities in Asia.
			</p>
			<div class="flex mt-8 space-x-4">
				<a href={facebookUrl}>
					<FacebookIcon class="w-10 h-10 p-2 rounded-full bg-accent text-white" /></a
				>
				<a href={instagramUrl}>
					<InstagramIcon class="w-10 h-10 p-2 rounded-full bg-accent text-white" /></a
				>
				<a href={linkedinUrl}>
					<LinkedInIcon class="w-10 h-10 p-2 rounded-full bg-accent text-white" /></a
				>
			</div>
		</div>
		<!-- site link  -->
		<div>
			<h1 class="text-secondary font-semibold text-2xl">Site Links</h1>
			{#each $routes as r}
				<a
					class="block text-lg py-3 border-b-2 border-b-neutral last:border-b-0 w-3/4 hover:text-base-110"
					href={r.path}>{r.name}</a
				>
			{/each}
		</div>
		<!-- contact us details  -->
		<div>
			<h1 class="text-secondary font-semibold text-2xl">Contact us</h1>
			<!-- email details  -->
			<div class="flex my-auto space-x-5 py-4">
				<MailIcon class="w-12 h-12 p-3 rounded-xl bg-primary text-white" />
				<div>
					<p class="text-md text-secondary font-bold pb-1">Email</p>
					<p class="text-md">info@raglobal.tn</p>
				</div>
			</div>
			<!-- phone details  -->
			<div class="flex my-auto space-x-5 py-4">
				<PhoneIcon class="w-12 h-12 p-3 rounded-xl bg-primary text-white" />
				<div>
					<p class="text-md text-secondary font-bold pb-1">Phone</p>
					<p class="text-md">+216-48 063 544</p>
				</div>
			</div>
		</div>
	</div>
	<!-- divider  -->
	<hr class="border-neutral mt-12 mb-8" />
	<!-- credits  -->
	<p>© 2024 Rezgani Akkari Global. All rights reserved.</p>
</footer>

<style>
	footer h1::after {
		display: block;
		content: '';
		background-color: #fbaf4d;
		height: 6px;
		width: 10%;
		border-radius: 25px;
		margin-top: 1%;
		margin-bottom: 3%;
	}
</style>
