<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
</script>

<svelte:head><title>One stay, one pass — Orach pricing</title></svelte:head>
<div class="container">
	<div class="page-heading">
		<div>
			<p class="eyebrow">Keep it simple</p>
			<h1>A free start.<br />One optional stay pass.</h1>
			<p>
				Get useful planning tools before deciding to pay. Your profile, city guides and community
				notes stay free.
			</p>
		</div>
	</div>
	<div class="pricing-grid">
		<section class="panel">
			<span class="badge">Your starting point</span>
			<h2>Free account</h2>
			<div class="price">US$0</div>
			<p>For exploring and building your first budget.</p>
			<ul>
				<li>Browse available city profiles and source links</li>
				<li>Your reusable home profile</li>
				<li>Basic budget in local and familiar currency</li>
				<li>Save your stay to your account</li>
				<li>Post, like and report community comments</li>
			</ul>
			<a class="button secondary full" href="/sign-up"
				>Create a free account<Icon name="arrow" size={17} /></a
			>
		</section>
		<section class="panel paid">
			<span class="badge">One destination · one stay</span>
			<h2>The stay pass</h2>
			<div class="price">US$7.99<span>one time</span></div>
			<p>For comparing possibilities and taking your plan with you.</p>
			<ul>
				<li>Everything in your free account</li>
				<li>Three saved alternative budget scenarios</li>
				<li>Detailed comparison of your own home and destination allowances</li>
				<li>Download your stay summary</li>
				<li>Up to 90 nights; access through seven days after departure</li>
			</ul>
			<a class="button full" href="/plan">Build your stay first<Icon name="arrow" size={17} /></a
			><small
				>No subscription or automatic renewal. Hosted Stripe Checkout supports eligible fiat and
				USDC methods when payments are configured.</small
			>
		</section>
	</div>
	<div class="notice" style="max-width:940px;margin:25px auto">
		Launch price proposal: US$7.99. Payments remain unavailable until the checkout and webhook are
		configured. Data coverage is shown per city; a pass does not promise a complete or
		live-confirmed city profile.
	</div>
	<div class="prose">
		<h2>Before you buy</h2>
		<p>
			The pass is tied to the destination and dates you save. Stays must be 1–90 nights and start
			within 180 days. Destination and dates are locked once checkout starts. You keep your own
			historical records after access expires. Prices and recommendations can change; operator
			booking terms apply separately. A seven-day satisfaction refund is offered, with applicable
			consumer rights preserved. See our policies for details.
		</p>
	</div>
</div>

<style>
	.pricing-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 25px;
		max-width: 940px;
		margin: auto;
	}
	.pricing-grid .panel {
		padding: 35px;
	}
	.pricing-grid h2 {
		font-size: 29px;
		margin: 24px 0;
	}
	.price {
		font:
			600 48px Manrope,
			sans-serif;
		letter-spacing: -2px;
	}
	.price span {
		display: block;
		font:
			12px 'DM Sans',
			sans-serif;
		letter-spacing: 0;
		margin-top: 10px;
		color: var(--muted);
	}
	.pricing-grid p {
		color: var(--muted);
		font-size: 14px;
		margin-top: 20px;
	}
	.pricing-grid ul {
		list-style: none;
		margin: 25px 0;
		padding: 0;
	}
	.pricing-grid li {
		padding: 12px 0;
		border-bottom: 1px solid var(--line);
		font-size: 13px;
	}
	.pricing-grid li:before {
		content: '✓';
		margin-right: 10px;
		color: #7a8d53;
	}
	.paid {
		background: #eff2e4;
		border-color: #c5d0b4;
	}
	.paid small {
		display: block;
		font-size: 10px;
		color: var(--muted);
		line-height: 1.7;
		margin-top: 18px;
	}
	@media (max-width: 700px) {
		.pricing-grid {
			grid-template-columns: 1fr;
		}
		.pricing-grid .panel {
			padding: 27px;
		}
	}
</style>
