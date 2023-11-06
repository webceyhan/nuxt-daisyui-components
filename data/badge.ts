import { Description } from '~/components/component-description.vue';
import {
    COLOR_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/badge/badge.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'badge',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label of badge',
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
                name: 'ghost',
                type: 'boolean',
                description: 'No background',
            },
            {
                name: 'outline',
                type: 'boolean',
                description: 'Transparent badge with colored border',
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
