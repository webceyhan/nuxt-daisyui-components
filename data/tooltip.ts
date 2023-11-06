import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    POSITION_CLASS_MAP,
} from '~/components/ui/tooltip/tooltip.vue';

export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);
export const POSITIONS: any[] = Object.keys(POSITION_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'tooltip',
        props: [
            {
                name: 'as',
                type: 'string',
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
