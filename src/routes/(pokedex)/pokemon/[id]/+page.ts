import type { PageLoad } from './$types';
import { fetchPokemon } from '$lib/get-pokemon';

export const load = (async ({ params }) => {
	const { id } = params;
	const pokemon = await fetchPokemon(id);
	return { pokemon };
}) satisfies PageLoad;
