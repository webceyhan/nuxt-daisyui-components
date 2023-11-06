import { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'drawer',
        props: [
            {
                name: 'id',
                type: 'string',
                description: 'ID of drawer',
            },
            {
                name: 'aside-class',
                type: 'string',
                description: 'Class of aside element',
            },
            {
                name: 'align-end',
                type: 'boolean',
                description: 'Align drawer to right side of page',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of drawer',
            },
            {
                name: 'aside',
                description: 'Content of aside element',
            },
        ],
    },
];
