<script>
	import Mail from '~icons/ic/baseline-mail';
	import Phone from '~icons/ic/baseline-local-phone';
</script>

<div class="py-8 flex justify-between border-b-2 border-base-110">
	<img src="/images/fullRed.png" alt="company logo" class="2xl:w-52 sm:w-36 w-52" />
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
	<div class="drawer sm:hidden">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<!-- Page content here -->
			<label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
		</div>
		<div class="drawer-side">
			<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
				<!-- Sidebar content here -->
				<li><a>Sidebar Item 1</a></li>
				<li><a>Sidebar Item 2</a></li>
			</ul>
		</div>
	</div>
</div>
