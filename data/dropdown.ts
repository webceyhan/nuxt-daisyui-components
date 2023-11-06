import { Description } from '~/components/component-description.vue';
import { POSITION_CLASS_MAP } from '~/components/ui/dropdown/dropdown.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/button/button.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);
export const POSITIONS: any[] = Object.keys(POSITION_CLASS_MAP);

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
