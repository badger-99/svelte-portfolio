import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: 'e2e',
	// Test the production build, not the dev server: that's what Cloudflare ships.
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173,
		timeout: 120_000,
		// Route contact emails to Resend's test inbox so runs never reach Hostinger.
		env: { CONTACT_TO: 'delivered@resend.dev' }
	},
	use: { baseURL: 'http://localhost:4173' }
});
