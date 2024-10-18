<script>
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	onMount(() => {
		const d = document;
		const w = 'https://tally.so/widgets/embed.js';

		const loadTally = () => {
			if (typeof Tally !== 'undefined') {
				Tally.loadEmbeds();
			} else {
				d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
					iframe.src = iframe.dataset.tallySrc;
				});
			}
		};

		if (typeof Tally !== 'undefined') {
			loadTally();
		} else if (d.querySelector(`script[src="${w}"]`) == null) {
			const s = d.createElement('script');
			s.src = w;
			s.onload = loadTally;
			s.onerror = loadTally;
			d.body.appendChild(s);
		}
	});
</script>

<!-- pattern 1 -->
<div class="relative">
	<img
		src="/images/patterns/primaryDots.png"
		alt="red dots"
		class="absolute w-1/3 -top-6 sm:-top-8 xl:-top-10 -start-4 sm:-start-8"
	/>
</div>

<div
	class="relative z-20 border-[1px] border-secondary px-4 sm:px-12 py-6 sm:py-14 rounded-3xl bg-white"
>
	<iframe
		data-tally-src="https://tally.so/embed/wk7VZM?alignLeft=1&dynamicHeight=1"
		loading="lazy"
		width="100%"
		height="400"
		frameborder="0"
		marginheight="0"
		marginwidth="0"
		title="Send us a message"
	>
	</iframe>
</div>

<div class="relative">
	<img
		src="/images/patterns/accentDots.png"
		alt="red dots"
		class="absolute w-1/3 -bottom-8 sm:-bottom-12 xl:-bottom-14 end-8"
	/>
</div>

<style></style>
