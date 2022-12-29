<script lang="ts">
	import type { PageData } from './$types';
	import { capitalise } from '$lib/utils';

	export let data: PageData;

	console.log(data);
	const type = data.pokemon.types[0].type.name;
</script>

<svelte:head>
	<title>{capitalise(data.pokemon.name)} • Pokedex | SvelteKit</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">
		{data.pokemon.name}
	</h1>

	<p>
		Type: <strong>{type}</strong> | Height: <strong>{data.pokemon.height}</strong>
		| Weight: <strong>{data.pokemon.weight}</strong>
	</p>

	<img class="w-52" src={data.pokemon.sprites['front_default']} alt={data.pokemon.name} />
</div>
