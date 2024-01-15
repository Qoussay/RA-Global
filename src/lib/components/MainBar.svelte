<script>
	import Navbar from './Navbar.svelte';
	import Mail from '~icons/ic/baseline-mail';
	import Phone from '~icons/ic/baseline-local-phone';
	import MenuIcon from '~icons/charm/menu-hamburger';
</script>

<div class="py-8 flex justify-between sm:border-b-2 sm:border-base-110">
	<img src="/images/fullRed.png" alt="company logo" class="2xl:w-52 w-36" />
	<div class="space-x-36 sm:flex hidden">
		<!-- email details  -->
		<div class="flex my-auto space-x-5">
			<Mail
				class="2xl:w-12 w-10 2xl:h-12 h-10 p-3 rounded-xl bg-primary-highlight text-white my-auto"
			/>
			<div>
				<p class="2xl:text-md text-sm font-bold pb-1">Email</p>
				<p class="2xl:text-md text-sm">info@raglobal.tn</p>
			</div>
		</div>
		<!-- phone details  -->
		<div class="flex my-auto space-x-5">
			<Phone
				class="2xl:w-12 w-10 2xl:h-12 h-10 p-3 rounded-xl bg-primary-highlight text-white my-auto"
			/>
			<div>
				<p class="2xl:text-md text-sm font-bold pb-1">Phone</p>
				<p class="2xl:text-md text-sm">+216-48 063 544</p>
			</div>
		</div>
	</div>
	<div class=" sm:hidden">
		<div class="drawer drawer-end h-full">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content my-auto">
				<!-- Page content here -->
				<label for="my-drawer" class="">
					<MenuIcon class="w-8 h-8 text-secondary drawer-button" />
				</label>
			</div>
			<div class="drawer-side z-20">
				<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
				<ul class="menu p-0 w-80 min-h-full bg-base-110 shadow:lg text-base-content">
					<!-- Sidebar content here -->
					<Navbar />
				</ul>
			</div>
		</div>
	</div>
</div>

<div class="hidden sm:block">
	<Navbar />
</div>
