import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'breadcrumbs',
        slots: [
            {
                name: 'default',
                description: 'Content of breadcrumbs',
            },
        ],
    },
];
