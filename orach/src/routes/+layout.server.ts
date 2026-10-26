import { session } from '#lib/server/auth';
export const load = async (event: import('@sveltejs/kit').RequestEvent) => ({
	user: await session(event),
	accountsAvailable: !!event.platform?.env.DB && !!event.platform?.env.ORACH_JWT_SECRET,
	billingAvailable:
		!!event.platform?.env.STRIPE_SECRET_KEY &&
		!!event.platform?.env.STRIPE_WEBHOOK_SECRET &&
		!!event.platform?.env.ORACH_PASS_PRICE_CENTS
});
