import { Description } from '~/components/component-description.vue';
import { INDICATORS } from './collapse';

export { INDICATORS };

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
