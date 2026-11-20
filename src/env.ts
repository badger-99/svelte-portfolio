import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	RESEND_API_KEY: { schema: (input) => input },
	CONTACT_TO: { schema: (input) => input }
});
