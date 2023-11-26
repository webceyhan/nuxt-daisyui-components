import type { Shape } from '~/components/ui/button/button.vue';
import type { Description } from '~/components/component-description.vue';
import { COLORS_WITH_NEUTRAL as COLORS, SIZES } from '~/constants';

export { COLORS, SIZES };

export const SHAPES: Shape[] = ['square', 'circle'];

export const DESCRIPTIONS: Description[] = [
    {
        name: 'button',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label of button',
            },
            {
                name: 'href',
                type: 'string',
                description: 'Url of button to render as link',
            },
            {
                name: 'icon',
                type: 'string',
                description: 'Icon at start of button',
            },
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'shape',
                type: 'string',
                values: SHAPES,
            },
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'ghost',
                type: 'boolean',
                description: 'No background',
            },
            {
                name: 'outline',
                type: 'boolean',
                description: 'Transparent button with colored border',
            },
            {
                name: 'active',
                type: 'boolean',
                description: 'Force button to show active state',
            },
            {
                name: 'wide',
                type: 'boolean',
                description: 'Wide button (more horizontal padding)',
            },
            {
                name: 'block',
                type: 'boolean',
                description: 'Full width button',
            },
            {
                name: 'loading',
                type: 'boolean',
                description: 'Show loading spinner',
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
