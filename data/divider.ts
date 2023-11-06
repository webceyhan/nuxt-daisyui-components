import { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'divider',
        props: [
            {
                name: 'horizontal',
                type: 'boolean',
                description: 'Whether the divider is horizontal or vertical',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of button',
            },
        ],
    },
];
