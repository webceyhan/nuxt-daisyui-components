import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/radio/radio.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'radio',
        props: [
            {
                name: 'modelValue',
                type: 'string',
                description: 'Value of the radio button',
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
                name: 'checked',
                type: 'boolean',
                description: 'Whether the radio button is checked or not',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Whether the radio button is disabled or not',
            },
        ],
    },
];
