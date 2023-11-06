import { Description } from '~/components/component-description.vue';
import { SNAP_CLASS_MAP } from '~/components/ui/carousel/carousel.vue';

export const SNAPS: any[] = Object.keys(SNAP_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'carousel',
        props: [
            {
                name: 'snap',
                type: 'string',
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
