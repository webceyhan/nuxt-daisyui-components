import { PAGES_BY_GROUP } from '~/constants/pages';

export const useMenu = () => {
    const activeGroupName = computed(() => {
        // get current route path
        const { path } = useRouter().currentRoute.value;

        // find the group name
        for (const group of PAGES_BY_GROUP) {
            const found = group.items.find((item) => item.href === path);

            if (found) return group.name;
        }
    });

    return {
        activeGroupName,
        PAGES_BY_GROUP,
    };
};
