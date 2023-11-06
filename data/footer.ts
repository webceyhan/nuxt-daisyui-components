import { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'footer',
        props: [
            {
                name: 'center',
                type: 'boolean',
                description: 'Center the content of the footer',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of footer',
            },
        ],
    },
    {
        name: 'footer-title',
        slots: [
            {
                name: 'default',
                description: 'Content of title',
            },
        ],
    },
];
