import { PAGES } from '~/constants/pages';

export const useSearch = () => {
    // define search query
    const query = ref('');

    const results = computed(() => {
        // skip if query is empty
        if (!query.value) return [];

        // convert query to lowercase
        const term = query.value.toLowerCase();

        return PAGES.filter(({ tags }) => tags.includes(term)).slice(0, 5);
    });

    return {
        query,
        results,
    };
};
