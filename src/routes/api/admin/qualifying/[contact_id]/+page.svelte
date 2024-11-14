<script>
	import '../../../../../app.css';
	export let data;

	let moyenneBac = 10;
	let eligible = false;
	let qualifying_score = 0;

	// Setting up the question variables
	let eligibility_q1 = null;
	let eligibility_q2 = null;
	let eligibility_q3 = null;
	let q1 = 0;
	let q2 = 0;
	let q3 = 0;
	let q4 = 0;
	let q5 = 0;
	let q6 = 0;
	let q7 = 0;
	let q8 = 0;
	let q9 = 0;

	$: eligible = eligibility_q1 && eligibility_q2 && eligibility_q3 ? 'Yes' : 'No';
	$: qualifying_score = eligible
		? parseFloat((((q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9) / 9) * 10).toFixed(2))
		: 0;

	async function handleSubmit() {
		try {
			const response = await fetch(`/api/admin/qualifying/${data.id}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ eligible, qualifying_score })
			});

			if (response.ok) {
				console.log('Data submitted successfully');
			} else {
				console.error('Error submitting data:', await response.json());
			}
		} catch (error) {
			console.error('Error submitting data:', error);
		}
	}
</script>

<section class=" bg-base-200 min-h-screen">
	<!-- Title bar -->
	<div class="flex flex-row gap-4 px-12 py-6">
		<img src="/images/fullRed.png" alt="company logo" class="w-36 lg:w-40 xl:w-42" />
		<h1 class="text-5xl font-bold text-primary text-center grow">Qualifying Framework</h1>
	</div>

	<div class="flex flex-row px-12 mt-12">
		<!-- Left Panel for the student information -->
		<div class="flex flex-col gap-8 pr-12 border-r-2">
			<!-- Profile picture + Name -->
			<div class=" flex flex-row gap-4 items-center">
				<img class="w-32 h-32 rounded-full" alt="Profile" src={data.profilePic} />
				<div>
					<h1 class="text-3xl font-bold pb-4">{data.firstName} {data.lastName}</h1>
					<p class="text-xl">
						Assigned to: <strong>{data.assignee.firstName + ' ' + data.assignee.lastName}</strong>
					</p>
				</div>
			</div>
			<!-- Rest of the information -->
			<div class="text-xl">
				{#each Object.entries(data.custom_fields) as [name, value]}
					<p class="mb-2"><strong>{name}:</strong> {value}</p>
				{/each}
			</div>
		</div>
		<!-- Right Panel for the questions -->
		<div class="grow pl-12">
			<form class="text-xl font-semibold flex flex-col gap-4">
				<!-- Eligibility q1 -->
				<label
					>Has the student completed high school and received their diploma?
					<select
						bind:value={eligibility_q1}
						class="select select-sm select-primary w-fit ms-2"
						required
					>
						<option value={false}>No</option>
						<option value={true}>Yes</option>
					</select>
				</label>
				<!-- Eligibility q2 -->
				<label
					>Did the student score at least 10 on the national high school exam (the Bac)?
					<select
						bind:value={eligibility_q2}
						class="select select-sm select-primary w-fit ms-2"
						required
					>
						<option value={false}>No</option>
						<option value={true}>Yes</option>
					</select>
				</label>
				<!-- Eligibility q3 -->
				<label
					>Does the student meet the entry requirements for their program of interest?
					<select
						bind:value={eligibility_q3}
						class="select select-sm select-primary w-fit ms-2"
						required
					>
						<option value={false}>No</option>
						<option value={true}>Yes</option>
					</select>
				</label>
				<!-- Q1 -->
				<label
					>Does the student has English qualification?
					<select bind:value={q1} class="select select-sm select-primary w-fit ms-2" required>
						<option value={10}>Yes</option>
						<option value={8}>Booked</option>
						<option value={6}>No</option>
					</select>
				</label>
				<!-- Q2 -->
				<label
					>Is the lead’s previous academic background related to the program they are applying for?
					<select bind:value={q2} class="select select-sm select-primary w-fit ms-2" required>
						<option value={10}>Yes</option>
						<option value={8}>Somewhat related</option>
						<option value={6}>No</option>
					</select>
				</label>
				<!-- Q3 -->
				<label
					>Does the lead have a clear goal for studying abroad?
					<select bind:value={q3} class="select select-sm select-primary w-fit ms-2" required>
						<option value={5}>No</option>
						<option value={10}>Yes</option>
					</select>
				</label>
				<!-- Q4 -->
				<label
					>Is the lead planning to start his studies within a reasonable timeframe
					<select bind:value={q4} class="select select-sm select-primary w-fit ms-2" required>
						<option value={10}>Yes</option>
						<option value={8}>Unclear</option>
						<option value={6}>No</option>
					</select>
				</label>
				<!-- Q5 -->
				<label
					>Is the lead familiar with Malaysia and chose it specifically ?
					<select bind:value={q5} class="select select-sm select-primary w-fit ms-2" required>
						<option value={5}>No</option>
						<option value={10}>Yes</option>
					</select>
				</label>
				<!-- Q6 -->
				<label
					>Has the lead taken any steps to start the application ? (IELTS booking, translated
					documents, etc..)
					<select bind:value={q6} class="select select-sm select-primary w-fit ms-2" required>
						<option value={10}>Yes</option>
						<option value={8}>Unclear</option>
						<option value={6}>No</option>
					</select>
				</label>
				<!-- Q7 -->
				<label
					>Has the lead sicussed thisdecision with their family?
					<select bind:value={q7} class="select select-sm select-primary w-fit ms-2" required>
						<option value={10}>Yes (has family support)</option>
						<option value={8}>Yes (family is hesitant)</option>
						<option value={6}>No</option>
					</select>
				</label>
				<!-- Q8 -->
				<label
					>Can the student afford studying in Malaysia?
					<select bind:value={q8} class="select select-sm select-primary w-fit ms-2" required>
						<option value={10}>Yes</option>
						<option value={8}>Unclear</option>
						<option value={6}>No</option>
					</select>
				</label>
				<!-- Q9 -->
				<label
					>Can the student pay fees through flywire?
					<select bind:value={q9} class="select select-sm select-primary w-fit ms-2" required>
						<option value={10}>Yes, everything</option>
						<option value={8}>Yes, only visa</option>
						<option value={6}>No</option>
					</select>
				</label>
				<button class="btn btn-secondary w-fit" onclick="my_modal_1.showModal()">Submit</button>
				<!-- Modal for validating the first part of the framework -->
				<dialog id="my_modal_1" class="modal">
					<div class="modal-box">
						<h3 class="text-lg font-bold">Qualifying for {data.firstName}</h3>

						<p class="py-4">Do you wish to submit your response?</p>
						<div class="modal-action">
							<form method="dialog" class="flex flex-row gap-4">
								<!-- if there is a button in form, it will close the modal -->
								<button class="btn">Close</button>
								<button class="btn btn-secondary" on:click={handleSubmit}>Submit</button>
							</form>
						</div>
					</div>
				</dialog>
			</form>
		</div>
	</div>
</section>
