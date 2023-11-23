import type { Description } from '~/components/component-description.vue';
import { COLORS_WITH_NEUTRAL as COLORS } from '~/constants';

export { COLORS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'step-group',
        props: [
            {
                name: 'vertical',
                type: 'boolean',
                description: 'Display steps vertically',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the steps',
            },
        ],
    },
    {
        name: 'step',
        props: [
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the step',
            },
        ],
    },
];
