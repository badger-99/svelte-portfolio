import { expect, test } from '@playwright/test';

test.describe('contact form', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/contact');
	});

	test('sends a message and shows the success toast', async ({ page }) => {
		await page.getByPlaceholder('Name').fill('Playwright');
		await page.getByPlaceholder('Email').fill('playwright@example.com');
		await page.getByPlaceholder('Subject (optional)').fill('E2E test');
		await page.getByPlaceholder('Type your message here.').fill('Automated contact form test.');
		await page.getByRole('button', { name: 'Submit' }).click();

		await expect(page.getByText('Message sent!')).toBeVisible({ timeout: 15_000 });
	});

	test('rejects an invalid email on the client without sending', async ({ page }) => {
		await page.getByPlaceholder('Name').fill('Playwright');
		await page.getByPlaceholder('Email').fill('not-an-email');
		await page.getByPlaceholder('Type your message here.').fill('Should never send.');
		await page.getByRole('button', { name: 'Submit' }).click();

		await expect(page.getByText(/invalid email/i)).toBeVisible();
		await expect(page.getByText('Message sent!')).not.toBeVisible();
	});
});
