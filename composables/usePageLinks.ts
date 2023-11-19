type Link = {
    label: string;
    group: string;
    href: string;
};

export function usePageLinks() {
    return useRouter()
        .getRoutes()
        .reduce((acc: Link[], { path }) => {
            // skip the root path
            if (path === '/') return acc;

            // split the path into menu and page names
            const [groupName, pageName] = path.split('/').slice(1);

            return [
                ...acc,
                {
                    label: pageName.replace(/-/g, ' ').toLowerCase(),
                    group: groupName,
                    href: path,
                },
            ];
        }, []);
}
