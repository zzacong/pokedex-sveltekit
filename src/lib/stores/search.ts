import { writable } from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SearchStoreModel<T extends Record<PropertyKey, any>> = {
	data: T[];
	filtered: T[];
	search: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createSearchStore = <T extends Record<PropertyKey, any>>(data: T[]) => {
	const { subscribe, set, update } = writable<SearchStoreModel<T>>({
		data: data,
		filtered: data,
		search: '',
	});

	return { subscribe, set, update };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const searchHandler = <T extends Record<PropertyKey, any>>(store: SearchStoreModel<T>) => {
	const searchTerm = store.search.toLowerCase() || '';
	store.filtered = store.data.filter((item) => {
		return item.name.toLowerCase().includes(searchTerm);
	});
};
