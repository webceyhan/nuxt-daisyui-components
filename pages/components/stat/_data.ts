import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'stat-group',
        props: [
            {
                name: 'vertical',
                type: 'boolean',
                description: 'Display stats vertically',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the stats',
            },
        ],
    },
    {
        name: 'stat',
        slots: [
            {
                name: 'figure',
                description: 'Figure of the stat',
            },
            {
                name: 'title',
                description: 'Title of the stat',
            },
            {
                name: 'subtitle',
                description: 'Subtitle of the stat',
            },
            {
                name: 'desc',
                description: 'Description of the stat',
            },
            {
                name: 'actions',
                description: 'Actions of the stat',
            },
        ],
    },
];
