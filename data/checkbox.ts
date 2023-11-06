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
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'size',
                type: 'string',
                values: SIZES,
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
