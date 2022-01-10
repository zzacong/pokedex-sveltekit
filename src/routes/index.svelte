<script>
  import PokemonStore from '../stores/pokestore'
</script>

<svelte:head>
  <title>Pokedex | SvelteKit</title>
</svelte:head>

<h1>SvelteKit Pokedex</h1>

{#each $PokemonStore as p (p.id)}
  <p class="text-red-400">{p.name}</p>
{/each}
