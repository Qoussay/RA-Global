import { SENDGRID_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { emailTemplate } from '$lib/emailTemplate.js';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
	const data = await request.formData();
	// getting the data
	const name = data.get('name');
	const email = data.get('email');
	const message = data.get('message');
	const phone = data.get('phone');

	// building message object
	const msg = {
		to: [
			{
				email: 'akkari@raglobal.tn',
				name: 'Qoussay El Akkari'
			},
			{
				email: 'rezgani@raglobal.tn',
				name: 'Aziz Rezgani'
			}
		],
		from: {
			email: 'info@raglobal.tn',
			name: 'RAG Contact'
		},
		subject: 'New Contact Request for RAG',
		text: `${name} has reached out to you. Their message is: ${message}`,
		html: emailTemplate(name, email, phone, message)
	};

	try {
		await sgMail.send(msg);
	} catch (e) {
		console.error(e);
		if (e.response) {
			console.error(e.response.body);
		}
		error(500, { message: 'Error occured while sending email', status: 500 });
	}

	return new Response(JSON.stringify({ message: 'Email sent', status: 200 }));
}
