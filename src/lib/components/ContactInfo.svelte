<script>
	import PhoneIcon from '~icons/ic/baseline-local-phone';
	import MailIcon from '~icons/ic/baseline-mail';
	import MapIcon from '~icons/material-symbols/location-on';
	export let type;
</script>

<div class="flex flex-row my-auto space-x-4">
	{#if type === 'email'}
		<MailIcon class="w-10 xl:w-11 h-10 xl:h-11 p-3 rounded-2xl bg-primary text-white my-auto" />
		<div>
			<p class="text-sm xl:text-base font-bold text-primary">Email</p>
			<a href="mailto:info@raglobal.tn" class="text-sm xl:text-base font-medium">info@raglobal.tn</a
			>
		</div>
	{:else if type === 'phone'}
		<PhoneIcon class="w-10 xl:w-11 h-10 xl:h-11 p-3 rounded-2xl bg-secondary text-white my-auto" />
		<div>
			<p class="text-sm xl:text-base font-bold text-secondary">Whatsapp</p>
			<a href="https://wa.me/+21648063544" class="text-sm xl:text-base font-medium"
				>+216-48 063 544</a
			>
		</div>
	{:else}
		<MapIcon class="w-10 xl:w-11 h-10 xl:h-11 p-3 rounded-2xl bg-primary text-white my-auto" />
		<div>
			<p class="text-sm xl:text-base font-bold text-primary">Address</p>
			<a href="https://wa.me/+21648063544" class="text-sm xl:text-base font-medium"
				>13, AV. Haramayan Charifayn, Mourouj 3</a
			>
		</div>
	{/if}
</div>
