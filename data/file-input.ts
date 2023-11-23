import type { Description } from '~/components/component-description.vue';
import { COLORS, SIZES } from '~/constants';

export { COLORS, SIZES };

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
                default: 'md',
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
