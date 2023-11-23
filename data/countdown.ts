import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'countdown',
        props: [
            {
                name: 'value',
                type: 'number',
                description: 'Value of the countdown between 0 and 99',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the countdown',
            },
        ],
    },
];
