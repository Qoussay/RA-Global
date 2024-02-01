export async function POST({ request }) {
	console.log('POST request received');
	console.log(request);
}

export async function GET({ request }) {
	console.log('GET request received');
	console.log(request);
}
