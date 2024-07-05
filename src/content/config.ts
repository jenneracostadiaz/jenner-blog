import { defineCollection, z } from 'astro:content';
import { SITE_TITLE } from '../consts';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		author: z.string().default(SITE_TITLE),
	}),
});

export const collections = { blog };
