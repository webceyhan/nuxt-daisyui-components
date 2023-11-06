import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/textarea/textarea.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'textarea',
        props: [
            {
                name: 'modelValue',
                type: 'string',
                description: 'Value of the input',
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
                name: 'ghost',
                type: 'boolean',
                description: 'No background',
            },
            {
                name: 'bordered',
                type: 'boolean',
                description: 'Whether the textarea has a border or not',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Whether the textarea is disabled or not',
            },
        ],
    },
];
