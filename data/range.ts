import type { Description } from '~/components/component-description.vue';
import { COLORS, SIZES } from '~/constants';

export { COLORS, SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'range',
        props: [
            {
                name: 'modelValue',
                type: 'string',
                description: 'Value of the input',
            },
            {
                name: 'min',
                type: 'string',
                description: 'Minimum value',
            },
            {
                name: 'max',
                type: 'string',
                description: 'Maximum value',
            },
            {
                name: 'step',
                type: 'string',
                description: 'Step value',
            },
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
                name: 'disabled',
                type: 'boolean',
                description: 'Whether the range is disabled or not',
            },
        ],
    },
];
