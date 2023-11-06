import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/file-input/file-input.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'file-input',
        props: [
            {
                name: 'modelValue',
                type: 'string',
                description: 'Value of the input',
            },
            {
                name: 'size',
                type: 'string',
                values: SIZES,
            },
            {
                name: 'color',
                type: 'string',
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
                description: 'Whether the checkbox has a border or not',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Whether the checkbox is disabled or not',
            },
        ],
    },
];
