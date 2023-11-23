import type { Description } from '~/components/component-description.vue';
import { COLORS, ALIGNMENTS } from '~/constants';

export { COLORS, ALIGNMENTS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'divider',
        props: [
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'alignment',
                type: 'string',
                values: ALIGNMENTS,
            },
            {
                name: 'horizontal',
                type: 'boolean',
                description: 'Whether the divider is horizontal or vertical',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of button',
            },
        ],
    },
];
