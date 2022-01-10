<script context="module">
  import { fetchPokemon } from '../../utils'

  export async function load({ params }) {
    const { id } = params
    const data = await fetchPokemon(id)
    return { props: { pokemon: data } }
  }
</script>

<script>
  import { capitalise } from '../../utils'
  import Title from '../../components/Title.svelte'

  export let pokemon
  const type = pokemon.types[0].type.name
</script>

<svelte:head>
  <title>{capitalise(pokemon.name)} • Pokedex | SvelteKit</title>
</svelte:head>

<div class="flex flex-col items-center">
  <Title>{pokemon.name}</Title>
  <p>
    Type: <strong>{type}</strong> | Height: <strong>{pokemon.height}</strong>
    | Weight: <strong>{pokemon.weight}</strong>
  </p>

  <img class="w-52" src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>
