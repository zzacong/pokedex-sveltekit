import { fetchPokemon } from '../../../utils'

export async function get({ params }) {
  const { id } = params
  const data = await fetchPokemon(id)
  return { status: 200, body: data }
}
