import { Description } from '~/components/component-description.vue';
import { SIZE_CLASS_MAP } from '~/components/ui/rating/rating.vue';
import { MASK_CLASS_MAP } from '~/components/ui/mask.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const MASKS: any[] = Object.keys(MASK_CLASS_MAP);

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
