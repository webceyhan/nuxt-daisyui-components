import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'join',
        props: [
            {
                name: 'vertical',
                type: 'boolean',
                description: 'Display items vertically',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the group',
            },
        ],
    },
];
