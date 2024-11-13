import { RESPOND_AUTH_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request, params }) {
	console.log('API called.');
	const { eligible, qualifying_score } = await request.json();
	console.log('Updating eligibility to ' + eligible);
	console.log('Updating eligibility to ' + qualifying_score);

	const url = `https://api.respond.io/v2/contact/id:${params.contact_id}`;
	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, application/xml, multipart/form-data',
			Authorization: `Bearer ${RESPOND_AUTH_TOKEN}`
		},
		body: `{"custom_fields":[{"name":"eligible","value":"${eligible}"},{"name":"qualifying_score","value":${qualifying_score}}]}`
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}

	return json({ message: 'Data submitted succesfully.' });
}
