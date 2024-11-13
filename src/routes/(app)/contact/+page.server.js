export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const _res = await event.fetch('/api/contact', {
			method: 'POST',
			body: data
		});
		const res = await _res.json();

		console.log('RESPONSE: ', res);
		return res;
	}
};
