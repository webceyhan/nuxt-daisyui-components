import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/range/range.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

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
                default: 'default',
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
