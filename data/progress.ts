import { Description } from '~/components/component-description.vue';
import { COLORS } from '~/constants';

export { COLORS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'progress',
        props: [
            {
                name: 'value',
                type: 'number',
                default: 0,
                description: 'Value of progress',
            },
            {
                name: 'max',
                type: 'number',
                default: 100,
                description: 'Maximum value of progress',
            },
            {
                name: 'size',
                type: 'string',
                default: '4rem',
                description: 'Size of progress.',
            },
            {
                name: 'thickness',
                type: 'string',
                default: '10%',
                description: 'Thickness of progress.',
            },
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'radial',
                type: 'boolean',
                description: 'Whether to use radial progress',
            },
        ],
    },
];
