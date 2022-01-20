<script context="module">
  import { fetchPokemons } from '../utils'

  export async function load() {
    const data = await fetchPokemons()
    return { props: { pokemons: data } }
  }
</script>

<script>
  // import PokemonStore from '../stores/pokestore'
  import Title from '../components/Title.svelte'
  import PokemonCard from '../components/PokemonCard.svelte'

  export let pokemons
  let searchTerm = ''
  let filtered = []

  $: {
    if (searchTerm) {
      filtered = pokemons.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    } else {
      filtered = [...pokemons]
    }
  }
</script>

<svelte:head>
  <title>Pokedex | SvelteKit</title>
</svelte:head>

<Title>SvelteKit Pokedex</Title>

<input
  type="text"
  placeholder="Search Pokemon"
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  bind:value={searchTerm}
/>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 py-4">
  {#each filtered as p (p.id)}
    <PokemonCard pokemon={p} />
  {/each}
</div>
