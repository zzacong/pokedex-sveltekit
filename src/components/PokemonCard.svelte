<script>
  import { fade } from 'svelte/transition'
  export let pokemon
</script>

<a
  href={`/pokemon/${pokemon.id}`}
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  in:fade
>
  <img src={pokemon.image} alt={pokemon.name} class="h-40 w-40" />
  <h2 class="uppercase text-xl">{pokemon.id} - {pokemon.name}</h2>
</a>
