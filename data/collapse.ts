import { Description } from '~/components/component-description.vue';
import { Indicator } from '~/components/ui/collapse/collapse.vue';

export const INDICATORS: Indicator[] = ['arrow', 'plus'];

export const DESCRIPTIONS: Description[] = [
    {
        name: 'collapse',
        props: [
            {
                name: 'indicator',
                type: 'string',
                values: INDICATORS,
            },
            {
                name: 'open',
                type: 'boolean',
                description: 'Force open',
            },
            {
                name: 'toggle',
                type: 'boolean',
                description:
                    'Whether the collapse works with focus or checkbox',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content for the collapse',
            },
            {
                name: 'title',
                description: 'Title for the collapse',
            },
        ],
    },
];
