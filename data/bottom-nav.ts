import { Description } from '~/components/component-description.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'bottom-nav',
        props: [
            {
                name: 'size',
                type: 'string',
                default: 'md',
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
