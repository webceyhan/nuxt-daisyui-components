import type { Description } from '~/components/component-description.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'menu',
        props: [
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'horizontal',
                type: 'boolean',
                description: 'Show menu horizontally',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of menu',
            },
        ],
    },
    {
        name: 'menu-item',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label of menu item',
            },
            {
                name: 'href',
                type: 'string',
                description: 'Link of menu item',
            },
            {
                name: 'icon',
                type: 'string',
                description: 'Icon of menu item',
            },
            {
                name: 'badge',
                type: 'string',
                description: 'Badge of menu item',
            },
            {
                name: 'tooltip',
                type: 'string',
                description: 'Tooltip of menu item',
            },
            {
                name: 'active',
                type: 'boolean',
                description: 'Active state of menu item',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Disabled state of menu item',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of menu item',
            },
            {
                name: 'icon',
                description: 'Icon of menu item',
            },
            {
                name: 'label',
                description: 'Label of menu item',
            },
            {
                name: 'badge',
                description: 'Badge of menu item',
            },
        ],
    },
    {
        name: 'menu-sub',
        props: [
            {
                name: 'title',
                type: 'string',
                description: 'Title of submenu',
            },
            {
                name: 'href',
                type: 'string',
                description: 'Link of submenu',
            },
            {
                name: 'icon',
                type: 'string',
                description: 'Icon of submenu',
            },
            {
                name: 'open',
                type: 'boolean',
                description: 'Open state of submenu',
            },
            {
                name: 'collapsible',
                type: 'boolean',
                description: 'Collapsible state of submenu',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of submenu',
            },
            {
                name: 'icon',
                description: 'Icon of submenu',
            },
            {
                name: 'title',
                description: 'Title of submenu',
            },
        ],
    },
    {
        name: 'menu-title',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label of menu title',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of menu title',
            },
        ],
    },
];
