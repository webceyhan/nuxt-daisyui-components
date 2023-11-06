import { Description } from '~/components/component-description.vue';
import { COLOR_CLASS_MAP } from '~/components/ui/progress/progress.vue';

export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

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
                default: 'default',
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
