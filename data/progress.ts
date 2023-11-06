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
                description: 'Value of progress',
            },
            {
                name: 'max',
                type: 'number',
                description: 'Maximum value of progress',
            },
            {
                name: 'size',
                type: 'string',
                description: 'Size of progress. default: 4rem',
            },
            {
                name: 'thickness',
                type: 'string',
                description: 'Thickness of progress. default: 10% of size',
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
        slots: [
            //
        ],
    },
];
