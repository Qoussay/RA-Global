import { RESPOND_AUTH_TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// fetch contact details
	const url = `https://api.respond.io/v2/contact/id:${params.contact_id}`;
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${RESPOND_AUTH_TOKEN}`
		}
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		data.custom_fields = await data.custom_fields.reduce((acc, field) => {
			acc[field.name] = field.value;
			return acc;
		}, {});
		// console.log(data);
		// data.custom_fields = customFieldsObject;
		return data;
	} catch (err) {
		console.error(err);
		error({ ...err });
	}
}
