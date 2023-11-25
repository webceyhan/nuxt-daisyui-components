import type { Description } from '~/components/component-description.vue';
import { ALIGNMENTS as SNAPS } from '~/constants';

export { SNAPS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'carousel',
        props: [
            {
                name: 'snap',
                type: 'string',
                default: 'start',
                values: SNAPS,
            },
            {
                name: 'vertical',
                type: 'boolean',
                description: 'Snap vertically',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of carousel',
            },
        ],
    },
    {
        name: 'carousel-item',
        slots: [
            {
                name: 'default',
                description: 'Content of carousel item',
            },
        ],
    },
];
