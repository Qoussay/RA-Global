<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	let showAlert = false;
	let alert;
	$: if ($page.form?.status === 200) {
		showAlert = true;
		alert = {
			message: 'Your message has been sent! We will reach out to you shortly.',
			type: 'success'
		};
		setTimeout(() => {
			showAlert = false;
		}, '3000');
	} else if ($page.form?.status) {
		showAlert = true;
		alert = { message: 'An error occurred. Please try again later.', type: 'error' };
		setTimeout(() => {
			showAlert = false;
		}, '3000');
	}
</script>

<!-- ALERT -->
{#if showAlert}
	<div
		class="flex z-30 fixed w-[90%] sm:w-1/2 lg:w-1/3 bottom-5 start-[5%] sm:start-5 text-xs lg:text-sm"
		transition:fly={{ x: -200, duration: 500 }}
	>
		<div
			role="alert"
			class="alert"
			class:alert-success={alert?.type === 'success'}
			class:alert-error={alert?.type === 'error'}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={alert?.type === 'success'
						? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
						: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'}
				/>
			</svg>

			<span>{alert?.message}</span>
		</div>
	</div>
{/if}
