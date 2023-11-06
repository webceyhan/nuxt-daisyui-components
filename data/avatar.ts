import { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'avatar-group',
        slots: [
            {
                name: 'default',
                description: 'Content of avatar group',
            },
        ],
    },
    {
        name: 'avatar',
        props: [
            {
                name: 'online',
                type: 'boolean',
                description: 'shows a green dot as online indicator',
            },
            {
                name: 'offline',
                type: 'boolean',
                description: 'shows a gray dot as offline indicator',
            },
            {
                name: 'placeholder',
                type: 'boolean',
                description: 'to show some letters as avatar placeholder',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of avatar',
            },
            {
                name: 'indicator',
                description: 'Content of indicator',
            },
        ],
    },
];
