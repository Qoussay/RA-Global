// export const prerender = true;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log('form submitted with data: ', JSON.stringify(data));

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(data).toString()
		})
			.then(() => {
				console.log('Form successfully submitted');
				alert('Thank you for your submission');
			})
			.catch((error) => alert(error));
	}
};
