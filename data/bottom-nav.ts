import { Description } from '~/components/component-description.vue';
import { SIZE_CLASS_MAP } from '~/components/ui/bottom-nav/bottom-nav.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'bottom-nav',
        props: [
            {
                name: 'size',
                type: 'string',
                values: SIZES,
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of navigation',
            },
        ],
    },
    {
        name: 'bottom-nav-item',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label text',
            },
            {
                name: 'icon',
                type: 'string',
                description: 'Icon name',
            },
            {
                name: 'active',
                type: 'boolean',
                description: 'Active state',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Disabled state',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of navigation item',
            },
        ],
    },
];
