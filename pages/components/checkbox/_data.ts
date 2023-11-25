import type { Description } from '~/components/component-description.vue';
import { COLORS, SIZES } from '~/constants';

export { COLORS, SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'checkbox',
        props: [
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'checked',
                type: 'boolean',
                description: 'Whether the checkbox is checked or not',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Whether the checkbox is disabled or not',
            },
        ],
    },
];
