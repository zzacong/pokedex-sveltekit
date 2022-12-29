import type { PageLoad } from './$types';
import { fetchPokemons } from '$lib/get-pokemon';

export const load: PageLoad = async () => {
	const pokemons = await fetchPokemons();
	return { pokemons };
};
