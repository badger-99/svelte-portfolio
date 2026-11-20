import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod4 } from 'sveltekit-superforms/adapters';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod4(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const resend = new Resend(env.RESEND_API_KEY);
		const name = form.data.name;
		const email = form.data.email;
		const subject = form.data.subject ? form.data.subject : '(No Subject)';
		const message = form.data.message;
		const from = 'Portfolio Contact <portfolio-contact@alfredm.me>';

		try {
			const { error } = await resend.emails.send({
				from,
				to: env.CONTACT_TO || ['hello@alfredm.me'],
				replyTo: `${email}`,
				subject: `${name}: ${subject}`,
				text: `${name} - ${email} said:\n\n${message}`
			});

			if (error) {
				return fail(500, { error, form });
			}

			return { form };
		} catch (error) {
			return fail(500, { error, form });
		}
	}
};
