import { Description } from '~/components/component-description.vue';
import { COLORS, SIZES } from '~/constants';

export { COLORS, SIZES };

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
