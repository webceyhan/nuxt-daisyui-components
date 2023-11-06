import { Description } from '~/components/component-description.vue';
import { INDICATOR_CLASS_MAP } from '~/components/ui/collapse/collapse.vue';

export const INDICATORS: any[] = Object.keys(INDICATOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'accordion',
        props: [
            {
                name: 'name',
                type: 'string',
                description: 'Group name of accordion items',
            },
            {
                name: 'indicator',
                type: 'string',
                default: 'none',
                values: INDICATORS,
            },
            {
                name: 'open',
                type: 'boolean',
                description: 'Force open',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of accordion',
            },
            {
                name: 'title',
                description: 'Title content of accordion',
            },
        ],
    },
];
