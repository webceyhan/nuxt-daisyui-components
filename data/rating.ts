import { Description } from '~/components/component-description.vue';
import { SIZE_CLASS_MAP } from '~/components/ui/rating/rating.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

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
                name: 'mask',
                type: 'string',
                description: 'Mask to use for the rating',
            },
            {
                name: 'itemClass',
                type: 'string',
                description: 'Class to apply to each item',
            },
            {
                name: 'itemClasses',
                type: 'string[]',
                description: 'Classes to apply to each item',
            },
            {
                name: 'size',
                type: 'string',
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
