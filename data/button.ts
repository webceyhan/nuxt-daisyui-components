import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
    SHAPE_CLASS_MAP,
} from '~/components/ui/button/button.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const SHAPES: any[] = Object.keys(SHAPE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

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
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of button',
            },
        ],
    },
];
