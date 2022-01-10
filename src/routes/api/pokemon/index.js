import { fetchPokemons } from '../../../utils'

export async function get() {
  const data = await fetchPokemons()
  return { status: 200, body: data }
}
