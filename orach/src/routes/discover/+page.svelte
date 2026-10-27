<script lang="ts">
	import { api } from '#lib/client';
	import { page } from '$app/state';
	import { sections } from '#lib/catalog';
	let { data } = $props();
	let city = $state(page.url.searchParams.get('city') || ''),
		country = $state(''),
		currency = $state('EUR'),
		summary = $state(''),
		slug = $state(''),
		message = $state(''),
		busy = $state(false);
	let states = $state<Record<string, string>>({});
	function overview(result: unknown): string {
		if (!result || typeof result !== 'object') return '';
		const answer = (result as { answer?: unknown }).answer;
		if (typeof answer === 'string') return answer;
		if (answer && typeof answer === 'object' && 'answer' in answer) return String(answer.answer);
		return '';
	}
	async function discover() {
		busy = true;
		message = '';
		summary = '';
		states = {};
		const input = { city, country, currency };
		try {
			const initial = await api('discovery', input);
			slug = initial.slug;
			if (initial.existing) {
				window.location.href = '/city/' + slug;
				return;
			}
			summary = overview(initial.result);
			if (!summary) {
				message =
					initial.status === 'running'
						? 'This city is already being researched. Open its profile shortly.'
						: 'The city overview is unavailable. Please try again later.';
				return;
			}
			await Promise.allSettled(
				sections.map(async (section) => {
					states[section.id] = 'Researching';
					try {
						const response = await api('discovery', { ...input, section: section.id });
						states[section.id] =
							response.status === 'needs_review'
								? 'Research collected'
								: response.status === 'running'
									? 'In progress'
									: 'Unavailable';
					} catch {
						states[section.id] = 'Could not complete';
					}
				})
			);
		} catch (error) {
			message = error instanceof Error ? error.message : 'Research is unavailable.';
		} finally {
			busy = false;
		}
	}
</script>

<svelte:head><title>Discover a city — Orach</title></svelte:head>
<div class="container" style="max-width:800px;padding-top:40px;padding-bottom:80px">
	<p class="eyebrow">Your next local chapter</p>
	<h1>Find your city.</h1>
	<p>Start with a short overview while we collect food, experiences and practical details.</p>
	{#if data.user}
		<form
			onsubmit={(event) => {
				event.preventDefault();
				void discover();
			}}
			class="panel"
			style="margin-top:24px"
		>
			<label class="label" for="new-city">City</label><input
				id="new-city"
				bind:value={city}
				minlength="2"
				maxlength="80"
				required
				disabled={busy}
			/>
			<label class="label" for="new-country">Country or territory</label><input
				id="new-country"
				bind:value={country}
				minlength="2"
				maxlength="80"
				required
				disabled={busy}
			/>
			<label class="label" for="new-currency">Local currency code</label><input
				id="new-currency"
				bind:value={currency}
				pattern="[A-Z]{3}"
				maxlength="3"
				required
				disabled={busy}
			/>
			<button class="button" disabled={busy} style="margin-top:20px"
				>{busy ? 'Finding your city…' : 'Explore this city'}</button
			>
		</form>
	{:else}<a href="/sign-up" class="button" style="margin-top:24px"
			>Create a free account to discover a city</a
		>{/if}
	{#if summary}<section class="panel" style="margin-top:24px">
			<p class="eyebrow">First look · research preview</p>
			<h2>{city}</h2>
			<p>{summary}</p>
			<p class="small-text">
				An initial overview. Prices, conditions and availability still need checking.
			</p>
			<ul>
				{#each sections as section}<li>{section.name}: {states[section.id] || 'Waiting'}</li>{/each}
			</ul>
			<a class="button secondary" href={'/city/' + slug}>Open city profile and community notes</a>
		</section>{/if}
	{#if message}<p role="status" class="notice info">{message}</p>{/if}
</div>
