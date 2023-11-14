import { Description } from '~/components/component-description.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'table',
        props: [
            {
                name: 'size',
                type: 'Size',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'zebra',
                type: 'boolean',
                description: 'Whether the table should have zebra striping',
            },
            {
                name: 'pin-rows',
                type: 'boolean',
                description: 'Whether the table should pin rows',
            },
            {
                name: 'pin-cols',
                type: 'boolean',
                description: 'Whether the table should pin columns',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the table',
            },
        ],
    },
];
