import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'hero',
        props: [
            {
                name: 'overlay-url',
                type: 'string',
                description: 'URL of the overlay image',
            },
            {
                name: 'overlay-class',
                type: 'string',
                description: 'Class of the overlay image',
            },
            {
                name: 'content-class',
                type: 'string',
                description: 'Class of the content',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of hero',
            },
        ],
    },
];
