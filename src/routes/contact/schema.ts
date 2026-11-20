import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().trim().min(2),
	email: z.email(),
	subject: z.string().trim(),
	message: z.string().trim().min(2)
});

export type FormSchema = typeof formSchema;
