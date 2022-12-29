import { z } from 'zod';

export async function fetchPokemon(id: string) {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	// console.log(res);
	if (!res.ok) throw new Error('error fetching');
	return pokemonSchema.parse(await res.json());
}

export async function fetchPokemons(limit = 100) {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
	const json = await fetch(url).then((resp) => resp.json());
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return json.results.map((p: any) => {
		const id = +p.url.match(/(\d+)\/$/)?.[1];
		return {
			...p,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	}) as z.infer<typeof pokemonsSchema>;
}

const pokemonsSchema = z
	.object({
		id: z.number(),
		image: z.string().url(),
		name: z.string(),
		url: z.string().url()
	})
	.array();

const pokemonSchema = z.object({
	name: z.string(),
	weight: z.number(),
	height: z.number(),
	types: z.object({ type: z.object({ name: z.string() }) }).array(),
	sprites: z.object({ front_default: z.string().url() })
});
