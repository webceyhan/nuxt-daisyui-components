import type { Description } from '~/components/component-description.vue';
import type { Indicator } from '~/components/ui/collapse/collapse.vue';

export const INDICATORS: Indicator[] = ['arrow', 'plus'];

export const DESCRIPTIONS: Description[] = [
    {
        name: 'collapse',
        props: [
            {
                name: 'title',
                type: 'string',
                description: 'Title of the collapse',
            },
            {
                name: 'icon',
                type: 'string',
                description: 'Icon at start of collapse title',
            },
            {
                name: 'name',
                type: 'string',
                description: 'Group name of accordion',
            },
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
                description: 'Toggle by clicking instead of focus',
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
