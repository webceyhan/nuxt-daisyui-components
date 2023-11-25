import type { Description } from '~/components/component-description.vue';
import { COLORS_WITH_NEUTRAL as COLORS } from '~/constants';

export { COLORS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'link',
        props: [
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'hover',
                type: 'boolean',
                description: 'Show underline only on hover',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of link',
            },
        ],
    },
];
