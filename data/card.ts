import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'card',
        props: [
            {
                name: 'body-class',
                type: 'string',
                description: 'Add a class to the card body',
            },
            {
                name: 'compact',
                type: 'boolean',
                description: 'Reduce the padding of the card body',
            },
            {
                name: 'cover-aside',
                type: 'boolean',
                description: 'Make the cover image on the side',
            },
            {
                name: 'cover-overlay',
                type: 'boolean',
                description: 'Make the cover image full width',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Card content',
            },
            {
                name: 'cover',
                description: 'Cover image',
            },
            {
                name: 'cover-bottom',
                description: 'Cover image at the bottom',
            },
            {
                name: 'title',
                description: 'Card title',
            },
            {
                name: 'actions',
                description: 'Card actions',
            },
        ],
    },
];
