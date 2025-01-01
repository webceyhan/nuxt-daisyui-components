import type { Description } from '~/components/component-description.vue';

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
                name: 'open',
                type: 'boolean',
                description: 'Force drawer to stay open',
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
        ],
    },
    {
        name: 'drawer-side',
        slots: [
            {
                name: 'default',
                description: 'Content of drawer sidebar',
            },
        ],
    },
    {
        name: 'drawer-content',
        slots: [
            {
                name: 'default',
                description: 'Content of drawer content',
            },
        ],
    },
    {
        name: 'drawer-button',
        slots: [
            {
                name: 'default',
                description: 'Content of drawer toggle button',
            },
        ],
    },
];
