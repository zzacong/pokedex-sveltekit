<script lang="ts">
	import type { PageData } from './$types';
	import { onDestroy } from 'svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import PokemonCard from './PokemonCard.svelte';

	export let data: PageData;

	const searchStore = createSearchStore(data.pokemons);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>Pokedex | SvelteKit</title>
	<meta name="description" content="Pokedex app built with SvelteKit" />
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

<input
	type="text"
	placeholder="Search Pokemon"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={$searchStore.search}
/>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 py-4">
	{#each $searchStore.filtered as p (p.id)}
		<PokemonCard pokemon={p} />
	{/each}
</div>
