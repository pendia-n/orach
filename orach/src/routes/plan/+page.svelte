<script lang="ts">
	import { onMount } from 'svelte';
	import { cities, money } from '#lib/catalog';
	import Icon from '#lib/components/Icon.svelte';
	import { page } from '$app/state';
	import { api, readLocal } from '#lib/client';
	let { data } = $props();
	let city = $state(page.url.searchParams.get('city') ?? 'manchester'),
		arrival = $state(''),
		departure = $state(''),
		travellers = $state(1),
		accommodation = $state(0),
		food = $state(0),
		transport = $state(0),
		extras = $state(0),
		rate = $state(0),
		currency = $state('HKD'),
		homeDaily = $state(0),
		id = $state(''),
		message = $state(''),
		busy = $state(false),
		paid = $state(false),
		scenarioName = $state(''),
		scenarios = $state<{ name: string; data: Record<string, unknown> }[]>([]);
	const destination = $derived(cities.find((c) => c.slug === city)!);
	const nights = $derived(
		arrival && departure ? Math.round((Date.parse(departure) - Date.parse(arrival)) / 86400000) : 0
	);
	const validDates = $derived(nights > 0 && nights <= 90);
	const days = $derived(validDates ? nights + 1 : 0);
	const total = $derived(accommodation + (food + transport) * days * travellers + extras);
	const familiar = $derived(rate > 0 ? total * rate : null);
	function stay() {
		return {
			city,
			arrival,
			departure,
			travellers,
			accommodation,
			food,
			transport,
			extras,
			rate,
			currency,
			homeDaily
		};
	}
	function apply(s: Record<string, unknown>) {
		city = String(s.city ?? city);
		arrival = String(s.arrival ?? '');
		departure = String(s.departure ?? '');
		for (const [k, set] of Object.entries({
			travellers: (v: number) => (travellers = v),
			accommodation: (v: number) => (accommodation = v),
			food: (v: number) => (food = v),
			transport: (v: number) => (transport = v),
			extras: (v: number) => (extras = v),
			rate: (v: number) => (rate = v),
			homeDaily: (v: number) => (homeDaily = v)
		})) {
			if (s[k] !== undefined) set(Number(s[k]));
		}
		currency = String(s.currency ?? currency);
	}
	onMount(async () => {
		const profile = readLocal('orach-profile', { currency: 'HKD', travellers: 1 });
		currency = profile.currency;
		travellers = profile.travellers;
		const local = readLocal<Record<string, unknown> | null>('orach-stay', null);
		if (local) apply(local);
		if (page.url.searchParams.get('city')) city = page.url.searchParams.get('city')!;
		if (!cities.some((c) => c.slug === city)) city = 'manchester';
		if (data.user) {
			try {
				const result = await api('stays');
				const match = result.stays.find((s: Record<string, unknown>) => s.city === city);
				if (match) {
					apply(match);
					id = match.id;
					paid = (await api('entitlement?stay=' + id)).active;
					if (paid) scenarios = (await api('scenarios?stay=' + id)).scenarios;
				}
			} catch {
				message = 'Account plans could not load. Your device draft is still available.';
			}
		}
	});
	async function save() {
		if (!validDates) {
			message = 'Choose a stay of 1–90 nights.';
			return;
		}
		busy = true;
		try {
			localStorage.setItem('orach-stay', JSON.stringify(stay()));
			if (data.user) {
				const r = await api('stays', { id, stay: stay() });
				id = r.id;
				paid = (await api('entitlement?stay=' + id)).active;
				message = 'Stay saved to your account.';
			} else message = 'Draft saved on this device. Sign up free to save to your account.';
		} catch (e) {
			message = (e as Error).message;
		} finally {
			busy = false;
		}
	}
	async function purchase() {
		if (!id) {
			message = 'Save your stay to your free account first.';
			return;
		}
		busy = true;
		try {
			const r = await api('checkout', { stayId: id });
			if (r.url) location.href = r.url;
		} catch (e) {
			message = (e as Error).message;
		} finally {
			busy = false;
		}
	}
	async function saveScenario() {
		try {
			if (!scenarioName.trim()) throw new Error('Give your scenario a name.');
			const r = await api('scenarios', { stayId: id, name: scenarioName, stay: stay() });
			scenarios = r.scenarios;
			scenarioName = '';
			message = 'Scenario saved.';
		} catch (e) {
			message = (e as Error).message;
		}
	}
</script>

<svelte:head><title>Your stay budget — Orach</title></svelte:head>
<div class="container">
	<div class="page-heading">
		<div>
			<p class="eyebrow">Make it your own</p>
			<h1>A stay that adds up.</h1>
			<p>
				Your dates, your choices, your estimates. Start with the costs you know and refine as you
				go.
			</p>
		</div>
		<span class="badge">{paid ? 'Stay pass active' : 'Free stay planner'}</span>
	</div>
	{#if page.url.searchParams.get('payment') === 'processing'}<p
			class="notice info"
			style="margin-bottom:20px"
		>
			Payment confirmation is processed securely by Stripe. Refresh this page shortly to check your
			pass. Returning here alone does not activate it.
		</p>{/if}
	<div class="planner-layout">
		<form
			class="panel"
			onsubmit={(e) => {
				e.preventDefault();
				void save();
			}}
		>
			<h3>The shape of your stay</h3>
			<div class="field" style="margin-top:24px">
				<label for="destination">Destination</label><select
					id="destination"
					bind:value={city}
					onchange={() => {
						id = '';
						paid = false;
						scenarios = [];
						rate = 0;
					}}
					>{#each cities as c}<option value={c.slug}>{c.name}, {c.country}</option>{/each}</select
				>
			</div>
			<div class="form-grid">
				<div class="field">
					<label for="arrival">Arrival</label><input
						id="arrival"
						type="date"
						bind:value={arrival}
						required
					/>
				</div>
				<div class="field">
					<label for="departure">Departure</label><input
						id="departure"
						type="date"
						bind:value={departure}
						required
					/>
				</div>
			</div>
			<div class="field">
				<label for="people">Travellers</label><input
					id="people"
					type="number"
					min="1"
					max="20"
					bind:value={travellers}
					required
				/>
			</div>
			<hr class="divider" />
			<div class="row">
				<h3>Your estimated costs</h3>
				<span class="badge">{destination.currency}</span>
			</div>
			<p class="small-text muted" style="margin:10px 0 22px">
				Enter your own quotes or allowances. Zero means you haven’t allowed for that cost yet.
			</p>
			<div class="field">
				<label for="accommodation">Accommodation · whole stay, everyone</label><input
					id="accommodation"
					type="number"
					min="0"
					max="100000000"
					step="0.01"
					bind:value={accommodation}
				/><small>Include cleaning fees and taxes in your quote.</small>
			</div>
			<div class="form-grid">
				<div class="field">
					<label for="food">Food & drinks · per person/day</label><input
						id="food"
						type="number"
						min="0"
						max="1000000"
						step="0.01"
						bind:value={food}
					/>
				</div>
				<div class="field">
					<label for="transport">Transport · per person/day</label><input
						id="transport"
						type="number"
						min="0"
						max="1000000"
						step="0.01"
						bind:value={transport}
					/>
				</div>
			</div>
			<div class="field">
				<label for="extras">Activities & shopping · whole stay, everyone</label><input
					id="extras"
					type="number"
					min="0"
					max="100000000"
					step="0.01"
					bind:value={extras}
				/><small
					>Add extra spending only. Meals already in the daily allowance should not be counted
					again.</small
				>
			</div>
			<hr class="divider" />
			<h3>In familiar money</h3>
			<div class="form-grid" style="margin-top:20px">
				<div class="field">
					<label for="currency">Your familiar currency</label><input
						id="currency"
						bind:value={currency}
						pattern="[A-Z]{3}"
						maxlength="3"
					/>
				</div>
				<div class="field">
					<label for="rate">1 {destination.currency} equals</label><input
						id="rate"
						type="number"
						min="0"
						max="100000000"
						step="0.000001"
						bind:value={rate}
					/><small>{currency} · your reference rate; not live</small>
				</div>
			</div>
			<button class="button" disabled={busy}
				>{busy ? 'Saving…' : 'Save free stay plan'}<Icon name="check" size={17} /></button
			>{#if message}<p class="notice info" style="margin-top:18px" role="status">{message}</p>{/if}
		</form>
		<aside class="budget-aside">
			<div class="budget-card">
				<p class="eyebrow">Your estimate · {destination.name}</p>
				<h2>{money(validDates ? total : 0, destination.currency)}</h2>
				{#if validDates}<p>
						{nights} nights · {days} spending days · {travellers}
						{travellers === 1 ? 'person' : 'people'}
					</p>{:else}<p>Choose your dates to calculate the stay.</p>{/if}
				<div class="budget-lines">
					<div>
						<span>Accommodation</span><strong>{money(accommodation, destination.currency)}</strong>
					</div>
					<div>
						<span>Food & drinks</span><strong
							>{money(food * days * travellers, destination.currency)}</strong
						>
					</div>
					<div>
						<span>Transport</span><strong
							>{money(transport * days * travellers, destination.currency)}</strong
						>
					</div>
					<div>
						<span>Activities & shopping</span><strong>{money(extras, destination.currency)}</strong>
					</div>
				</div>
				<div class="familiar">
					<span>In your familiar currency</span><strong
						>{familiar !== null && validDates
							? money(familiar, currency)
							: 'Add your reference rate'}</strong
					>
				</div>
				<small
					>Your inputs, not a researched city estimate. Excludes any costs you haven’t entered.</small
				>
			</div>
			<div class="panel pass-card">
				<span class="badge">{paid ? 'Your stay pass' : 'One stay. A little more clarity.'}</span>
				<h3>{paid ? 'Compare your own routine.' : 'Go further for US$7.99.'}</h3>
				{#if paid}<div class="field">
						<label for="home-daily">Home food & transport per person/day ({currency})</label><input
							id="home-daily"
							type="number"
							min="0"
							step="0.01"
							bind:value={homeDaily}
						/>
					</div>
					{#if homeDaily > 0 && rate > 0}<p class="notice">
							Your entered destination daily food and transport allowance is {Math.round(
								(((food + transport) * rate) / homeDaily) * 100
							)}% of your home allowance. Coverage: these two categories only; excludes
							accommodation and extras.
						</p>{/if}
					<div class="field" style="margin-top:18px">
						<label for="scenario">Save an alternative scenario</label><input
							id="scenario"
							bind:value={scenarioName}
							maxlength="60"
							placeholder="For example, more meals out"
						/>
					</div>
					<button class="button secondary full" onclick={saveScenario}
						>Save scenario ({scenarios.length}/3)</button
					>{#each scenarios as s}<button class="scenario" onclick={() => apply(s.data)}
							>{s.name}<Icon name="arrow" size={15} /></button
						>{/each}<a class="button full" style="margin-top:15px" href={'/api/export?stay=' + id}
						><Icon name="download" size={16} />Export this stay</a
					>{:else}<p>
						Three saved scenarios, a detailed comparison of your own allowances, and a downloadable
						stay summary. One destination stay, up to 90 nights. No renewal.
					</p>
					<button
						class="button full"
						disabled={busy || !data.user || !data.billingAvailable}
						onclick={purchase}
						>{!data.user
							? 'Sign in to purchase'
							: !data.billingAvailable
								? 'Payments opening soon'
								: 'Get the stay pass'}</button
					><small
						>USD checkout · fiat and USDC where eligible. No payment is taken while checkout is
						unavailable.</small
					>{/if}
			</div>
		</aside>
	</div>
</div>

<style>
	.planner-layout {
		display: grid;
		grid-template-columns: 1fr 370px;
		gap: 30px;
		align-items: start;
		max-width: 1100px;
	}
	.budget-card {
		background: var(--ink);
		color: white;
		border-radius: 14px;
		padding: 30px;
	}
	.budget-card .eyebrow {
		font-size: 9px;
		color: #c0cecc;
	}
	.budget-card h2 {
		font-size: 43px;
		margin: 20px 0 10px;
		overflow-wrap: anywhere;
	}
	.budget-card > p {
		font-size: 11px;
		color: #c5d3d3;
	}
	.budget-lines {
		border-block: 1px solid #ffffff25;
		margin: 23px 0;
		padding: 16px 0;
	}
	.budget-lines > div {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		margin: 12px 0;
		gap: 10px;
	}
	.budget-lines span {
		color: #d3dede;
	}
	.budget-lines strong {
		font-weight: 500;
	}
	.familiar {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.familiar span {
		font-size: 11px;
		color: #d3dede;
	}
	.familiar strong {
		font-family: Manrope, sans-serif;
		font-size: 23px;
		color: var(--yellow);
	}
	.budget-card > small {
		display: block;
		font-size: 10px;
		line-height: 1.7;
		color: #afc1c0;
		margin-top: 22px;
	}
	.pass-card {
		margin-top: 20px;
	}
	.pass-card h3 {
		margin: 18px 0;
	}
	.pass-card p {
		font-size: 13px;
		color: var(--muted);
		margin: 15px 0 22px;
	}
	.pass-card > small {
		display: block;
		font-size: 10px;
		line-height: 1.7;
		color: var(--muted);
		margin-top: 14px;
	}
	.scenario {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 12px 0;
		border-bottom: 1px solid var(--line);
		background: none;
		text-align: left;
		font-size: 13px;
	}
	@media (max-width: 900px) {
		.planner-layout {
			grid-template-columns: 1fr 310px;
			gap: 20px;
		}
		.budget-card {
			padding: 23px;
		}
	}
	@media (max-width: 700px) {
		.planner-layout {
			grid-template-columns: 1fr;
		}
		.budget-aside {
			grid-row: 1;
		}
		.budget-card {
			padding: 24px;
		}
		.budget-card h2 {
			font-size: 37px;
		}
		.budget-lines {
			display: none;
		}
		.pass-card {
			margin-bottom: 5px;
		}
		.planner-layout > .panel {
			grid-row: 2;
		}
	}
</style>
