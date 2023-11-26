import type { Description } from '~/components/component-description.vue';
import { SIZES, MASKS } from '~/constants';

export { SIZES, MASKS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'rating',
        props: [
            {
                name: 'modelValue',
                type: 'number',
                description: 'Value of the rating',
            },
            {
                name: 'max',
                type: 'number',
                description: 'Maximum value',
            },
            {
                name: 'item-class',
                type: 'string',
                description: 'Class to apply to each item',
            },
            {
                name: 'item-classes',
                type: 'string[]',
                description: 'Classes to apply to each item',
            },
            {
                name: 'mask',
                type: 'string',
                default: 'star',
                values: MASKS,
            },
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Whether the rating is disabled or not',
            },
        ],
    },
];
