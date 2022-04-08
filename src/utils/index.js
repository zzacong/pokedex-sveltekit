export const capitalise = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export async function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  console.log(res)
  if (!res.ok) throw new Error('error fetching')
  return res.json()
}

export async function fetchPokemons(limit = 100) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  const res = await fetch(url)
  const json = await res.json()
  return json.results.map((p) => {
    const id = +p.url.match(/(\d+)\/$/)[1]
    return {
      ...p,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    }
  })
}
