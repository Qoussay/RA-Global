<script>
	import FAQ from '$lib/components/FAQ.svelte';

	const faqArray = [
		{
			id: 'faq1',
			question: 'Q: How can RA Global assist in finding the right scholarship?',
			answer:
				'A: RA Global specializes in personalized guidance, tailoring scholarship searches to match your academic and career aspirations, ensuring you access opportunities that align with your goals.'
		},
		{
			id: 'faq2',
			question: 'Q: What types of universities does RA Global collaborate with?',
			answer:
				'A: We collaborate with a diverse range of universities across Asia, ensuring access to esteemed institutions that offer a variety of academic programs.'
		},
		{
			id: 'faq3',
			question: 'Q: How does RA Global support the application process?',
			answer:
				'A: Our support extends from document preparation to application submission, ensuring a seamless process and maximizing your chances of successful admission.'
		},
		{
			id: 'faq4',
			question: 'Q: What sets RA Global apart in student recruitment strategies?',
			answer:
				'A: RA Global employs targeted marketing, on-ground events, and strategic outreach to attract top-tier students, creating a robust and diverse student community for our partner universities.'
		},
		{
			id: 'faq5',
			question: "Q: Is there a cost for RA Global's application support services?",
			answer:
				"A: No, RA Global's application support services are entirely free of charge. Our commitment is to provide accessible and comprehensive assistance to students seeking educational opportunities."
		}
	];
</script>

<section id="FAQ" class="pt-20 bg-base-100">
	<div class="max-w-[60rem] px-4 sm:px-12 mx-auto flex flex-col">
		<div class="mx-auto max-w-[40rem] lg:max-w-[100rem]">
			<!-- title -->
			<h1 class="font-bold text-3xl/snug lg:text-4xl/snug xl:text-5xl/snug text-secondary">
				Frequently asked questions
			</h1>
			<!-- description  -->
			<p class="font-medium text-base xl:text-lg my-4 lg:w-3/4">
				Explore our FAQ section for quick answers to common queries about our services, admissions,
				and support. Have a question not covered? Feel free to reach out, and we'll be happy to
				assist you!
			</p>
		</div>
		<!-- Q&A  -->
		<div class="mx-auto lg:mx-0 max-w-[40rem] lg:max-w-[100rem] w-full">
			{#each faqArray as f}
				<FAQ data={f} />
			{/each}
		</div>
	</div>
</section>

<style></style>
