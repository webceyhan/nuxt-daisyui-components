import type { Description } from '~/components/component-description.vue';
import { COLORS, POSITIONS } from '~/constants';

export { COLORS, POSITIONS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'tooltip',
        props: [
            {
                name: 'as',
                type: 'string',
                default: 'div',
                description: 'The element to render',
            },
            {
                name: 'text',
                type: 'string',
                description: 'The text to show in the tooltip',
            },
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'position',
                type: 'string',
                default: 'top',
                values: POSITIONS,
            },
            {
                name: 'open',
                type: 'boolean',
                description: 'Whether the tooltip should be open',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the tooltip',
            },
        ],
    },
];
