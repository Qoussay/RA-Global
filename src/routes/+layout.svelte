<script>
	import '../app.css';
	import MainBar from '$lib/components/MainBar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { routes } from '$lib/stores';
	import MailIcon from '~icons/ic/baseline-mail';
	import PhoneIcon from '~icons/ic/baseline-local-phone';
	import FacebookIcon from '~icons/ic/round-facebook';
	import InstagramIcon from '~icons/ri/instagram-fill';
	import LinkedInIcon from '~icons/ion/logo-linkedin';

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
<section id="BrandLogo" class="bg-base-300 2xl:py-36 py-24">
	<img src="/images/hatRed.png" alt="brand logo" class="2xl:w-64 w-44 mx-auto" />
	<h1 class="font-bold 2xl:text-5xl text-4xl text-secondary text-center leading-tight mt-8">
		Bridging Borders,<br />Fostering Futures
	</h1>
	<div class="mx-auto w-fit">
		<Button text="Enroll today" nav="/contact" />
	</div>
</section>

<!-- footer  -->
<footer class="bg-base-200 2xl:pt-24 pt-12 pb-12 px-12 font-medium">
	<div class="grid grid-cols-4">
		<!-- brand logo and social links  -->
		<div class="col-start-1 col-span-2">
			<img src="/images/fullRed.png" alt="brand logo" class="2xl:w-56 w-44" />
			<p class="2xl:text-lg text-md leading-relaxed mt-12 w-3/4">
				RA Global is a leading education consultancy firm, connecting North African students to
				tailored scholarship and educational opportunities in Asia.
			</p>
			<div class="flex 2xl:mt-8 mt-6 space-x-4">
				<a href={facebookUrl}>
					<FacebookIcon
						class="2xl:w-10 w-8 2xl:h-10 h-8 p-2 rounded-full bg-accent text-white"
					/></a
				>
				<a href={instagramUrl}>
					<InstagramIcon
						class="2xl:w-10 w-8 2xl:h-10 h-8 p-2 rounded-full bg-accent text-white"
					/></a
				>
				<a href={linkedinUrl}>
					<LinkedInIcon
						class="2xl:w-10 w-8 2xl:h-10 h-8 p-2 rounded-full bg-accent text-white"
					/></a
				>
			</div>
		</div>
		<!-- site link  -->
		<div>
			<h1 class="text-secondary font-semibold 2xl:text-2xl text-lg">Site Links</h1>
			{#each $routes as r}
				<a
					class="block 2xl:text-lg text-md 2xl:py-3 py-2 border-b-2 border-b-neutral last:border-b-0 w-3/4 hover:text-base-110"
					href={r.path}>{r.name}</a
				>
			{/each}
		</div>
		<!-- contact us details  -->
		<div>
			<h1 class="text-secondary font-semibold 2xl:text-2xl text-lg">Contact us</h1>
			<!-- email details  -->
			<div class="flex my-auto space-x-5 py-4">
				<MailIcon
					class="2xl:w-12 2xl:h-12 w-10 h-10 my-auto p-3 rounded-xl bg-primary-highlight text-white"
				/>
				<div>
					<p class="2xl:text-md text-sm text-secondary font-bold pb-1">Email</p>
					<p class="2xl:text-md text-sm">info@raglobal.tn</p>
				</div>
			</div>
			<!-- phone details  -->
			<div class="flex my-auto space-x-5 py-4">
				<PhoneIcon
					class="2xl:w-12 2xl:h-12 w-10 h-10 my-auto p-3 rounded-xl bg-primary-highlight text-white"
				/>
				<div>
					<p class="2xl:text-md text-sm text-secondary font-bold pb-1">Phone</p>
					<p class="2xl:text-md text-sm">+216-48 063 544</p>
				</div>
			</div>
		</div>
	</div>
	<!-- divider  -->
	<hr class="border-neutral 2xl:mt-12 mt-8 2xl:mb-8 mb-6" />
	<!-- credits  -->
	<p class="text-sm 2xl:text-md">© 2024 Rezgani Akkari Global. All rights reserved.</p>
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

	@media (max-width: 1536px) {
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
