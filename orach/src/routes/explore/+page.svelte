<script lang="ts">
	import { cities } from '#lib/catalog';
	import Icon from '#lib/components/Icon.svelte';
	import CityArt from '#lib/components/CityArt.svelte';
	import { page } from '$app/state';
	import { api } from '#lib/client';
	let query = $state(page.url.searchParams.get('q') ?? ''),
		region = $state('All destinations');
	const regions = [
		'All destinations',
		'Asia',
		'Europe',
		'Americas',
		'Africa',
		'Oceania',
		'Middle East'
	];
	const filtered = $derived(
		cities.filter(
			(c) =>
				(region === 'All destinations' || c.region === region) &&
				(c.name + ' ' + c.country).toLowerCase().includes(query.toLowerCase())
		)
	);
	function track(slug: string) {
		void api('search', { city: slug }).catch(() => {});
	}
</script>

<svelte:head><title>Explore 55 destinations — Orach</title></svelte:head>
<div class="container">
	<div class="page-heading">
		<div>
			<p class="eyebrow">Your next everyday</p>
			<h1>Go somewhere.<br />Find your kind of life.</h1>
			<p>Food, things to make and places to wander. Start with a city, then make it yours.</p>
		</div>
		<span class="badge">55 destinations on our list</span>
	</div>
	<div class="explore-search">
		<Icon name="search" /><input
			bind:value={query}
			aria-label="Search cities or countries"
			placeholder="Search a city or country"
		/>{#if query}<button class="icon-button" onclick={() => (query = '')} aria-label="Clear search"
				><Icon name="close" size={15} /></button
			>{/if}
	</div>
	<div class="filters pill-group">
		{#each regions as r}<button
				class="pill"
				class:active={region === r}
				onclick={() => (region = r)}>{r}</button
			>{/each}
	</div>
	<div class="row result-heading">
		<p class="small-text muted">
			{filtered.length}
			{filtered.length === 1 ? 'destination' : 'destinations'}
		</p>
		<p class="small-text muted">Illustrated destinations · coverage labelled individually</p>
	</div>
	{#if !filtered.length}<div class="empty">
			<Icon name="search" size={30} />
			<h3>No matching destination</h3>
			<p>Try another spelling or country. Our first collection covers 55 destinations.</p>
			<button
				class="button secondary"
				onclick={() => {
					query = '';
					region = 'All destinations';
				}}>Show all destinations</button
			>
		</div>{:else}<div class="grid-four">
			{#each filtered as city, i}<a
					class="city-card"
					onclick={() => track(city.slug)}
					href={'/city/' + city.slug}
					><div class="art-wrap">
						<CityArt color={city.color} variant={i} /><span
							class="badge"
							class:draft={city.status === 'draft'}
							>{city.status === 'draft' ? 'Research preview' : 'Awaiting profile'}</span
						>
					</div>
					<div class="card-body">
						<span class="country">{city.country}</span>
						<h3>{city.name}</h3>
						<div class="card-bottom">
							<span
								>{city.currency} · {city.status === 'draft'
									? 'Explore the research'
									: 'Plan with your own prices'}</span
							><Icon name="arrow" size={17} />
						</div>
					</div></a
				>{/each}
		</div>{/if}
</div>

<style>
	.explore-search {
		display: flex;
		align-items: center;
		gap: 14px;
		background: white;
		border: 1px solid var(--line);
		border-radius: 10px;
		padding: 13px 18px;
		max-width: 600px;
	}
	.explore-search input {
		border: 0;
		outline: 0;
		flex: 1;
		min-width: 0;
		background: none;
		font-size: 14px;
	}
	.filters {
		margin-top: 25px;
	}
	.result-heading {
		margin: 28px 0 18px;
	}
	@media (max-width: 700px) {
		.result-heading p:last-child {
			display: none;
		}
	}
</style>
