<script>
	export let service;
	import StudentIcon from '~icons/ph/student';
	import MegaphoneIcon from '~icons/ph/megaphone';
	import CalendarIcon from '~icons/material-symbols/calendar-month-outline';
	import BullseyeIcon from '~icons/mdi/bullseye-arrow';
	import SupportIcon from '~icons/ri/question-answer-line';
</script>

<div class="bg-base-300 shadow-md p-5 rounded-lg">
	{#if service.icon === 'student'}
		<StudentIcon class="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />
	{:else if service.icon === 'megaphone'}
		<MegaphoneIcon class="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />
	{:else if service.icon === 'calendar'}
		<CalendarIcon class="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />
	{:else if service.icon === 'bullseye'}
		<BullseyeIcon class="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />
	{:else if service.icon === 'support'}
		<SupportIcon class="w-8 sm:w-10 h-8 sm:h-10 text-secondary" />
	{/if}
	<h1 class="text-lg sm:text-xl font-bold text-secondary my-2">{service.title}</h1>
	<p class="font-medium text-sm">{service.description}</p>
</div>
