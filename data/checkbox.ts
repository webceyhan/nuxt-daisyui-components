import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/checkbox/checkbox.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

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
                default: 'default',
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
