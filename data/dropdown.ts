import type { Description } from '~/components/component-description.vue';
import { COLORS_WITH_NEUTRAL as COLORS, POSITIONS, SIZES } from '~/constants';

export { COLORS, POSITIONS, SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'dropdown',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label of dropdown trigger',
            },
            {
                name: 'icon',
                type: 'string',
                description: 'Icon at start of dropdown trigger',
            },
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'outline',
                type: 'boolean',
                description: 'Transparent trigger button with colored border',
            },
            {
                name: 'position',
                type: 'string',
                default: 'bottom',
                values: POSITIONS,
            },
            {
                name: 'open',
                type: 'boolean',
                description: 'Force open',
            },
            {
                name: 'hover',
                type: 'boolean',
                description: 'Opens on hover too',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Disable dropdown trigger',
            },
            {
                name: 'align-to-end',
                type: 'boolean',
                description: 'Aligns to end',
            },
            {
                name: 'no-indicator',
                type: 'boolean',
                description: 'No indicator icon',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of menu',
            },
            {
                name: 'trigger',
                description: 'Trigger button',
            },
        ],
    },
];
