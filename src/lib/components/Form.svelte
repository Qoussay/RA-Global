<script>
	import { enhance } from '$app/forms';
</script>

<!-- pattern 1 -->
<div class="relative">
	<img
		src="/images/patterns/primaryDots.png"
		alt="red dots"
		class="absolute w-1/3 -top-6 sm:-top-8 xl:-top-10 -start-4 sm:-start-8"
	/>
</div>
<form
	class="bg-white border-[1px] border-secondary px-12 py-14 rounded-3xl z-20 relative text-sm xl:text-base"
	name="contact"
	method="POST"
	use:enhance
>
	<h2 class="font-semibold text-xl xl:text-2xl text-primary">Send us a message</h2>
	<p class="font-medium py-1">We'll get back to you within 24 hours.</p>

	<!-- input fields  -->
	<div class="flex flex-col mt-6 space-y-3">
		<!-- name field  -->
		<label>
			Name *
			<input
				required
				type="text"
				name="name"
				placeholder="Mohsen elWral"
				class="input input-bordered input-secondary bg-white w-full block rounded-xl mt-1"
			/>
		</label>
		<!-- email field  -->
		<label>
			Email *
			<input
				required
				type="email"
				name="email"
				placeholder="elwral@email.com"
				class="input input-bordered input-secondary bg-white w-full block rounded-xl mt-1"
			/>
		</label>
		<!-- phone field  -->
		<label>
			Phone *
			<input
				required
				type="text"
				name="phone"
				placeholder="(123) 45-6789"
				class="input input-bordered input-secondary bg-white w-full block rounded-xl mt-1"
			/>
		</label>
		<!-- message field  -->
		<label>
			Message *
			<textarea
				required
				class="textarea textarea-bordered textarea-secondary bg-white w-full block rounded-xl mt-1"
				name="message"
				placeholder="Message"
			></textarea>
		</label>
	</div>
	<!-- submit button  -->
	<button
		class="font-semibold w-fit bg-accent hover:bg-accent-highlight text-sm xl:text-base rounded-full py-3 px-6 mt-8"
		type="submit"
	>
		Send message
	</button>
</form>
<div class="relative">
	<img
		src="/images/patterns/accentDots.png"
		alt="red dots"
		class="absolute w-1/3 -bottom-8 sm:-bottom-12 xl:-bottom-14 end-8"
	/>
</div>

<style></style>
