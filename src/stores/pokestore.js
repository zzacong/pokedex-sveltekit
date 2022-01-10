import { writable } from 'svelte/store'

const PokemonStore = writable([])

const fetchPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100'
  const res = await fetch(url)
  const json = await res.json()
  const formatted = json.results.map((p) => {
    const id = +p.url.match(/(\d+)\/$/)[1]
    return {
      ...p,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    }
  })
  PokemonStore.set(formatted)
}

fetchPokemon()

export default PokemonStore
