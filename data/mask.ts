import { Description } from '~/components/component-description.vue';
import { MASKS as SHAPES } from '~/constants';

export { SHAPES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'mask',
        props: [
            {
                name: 'shape',
                type: 'string',
                default: 'squircle',
                values: SHAPES,
            },
            {
                name: 'first-half',
                type: 'boolean',
                description: 'Display only the first half of the mask',
            },
            {
                name: 'last-half',
                type: 'boolean',
                description: 'Display only the last half of the mask',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the mask',
            },
        ],
    },
];
