import type { Description } from '~/components/component-description.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'tab-nav',
        props: [
            {
                name: 'size',
                type: 'Size',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'boxed',
                type: 'boolean',
                description: 'Whether the tabs should be boxed',
            },
            {
                name: 'bordered',
                type: 'boolean',
                description: 'Whether the tabs should be bordered',
            },
            {
                name: 'lifted',
                type: 'boolean',
                description: 'Whether the tabs should be lifted',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the tabs',
            },
        ],
    },
    {
        name: 'tab',
        props: [
            {
                name: 'active',
                type: 'boolean',
                description: 'Whether the tab is active',
            },
            {
                name: 'disabled',
                type: 'boolean',
                description: 'Whether the tab is disabled',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the tab',
            },
            {
                name: 'indicator',
                description: 'Indicator of the tab',
            },
        ],
    },
    {
        name: 'tab-radio',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label text',
            },
        ],
    },
    {
        name: 'tab-content',
        slots: [
            {
                name: 'default',
                description: 'Content of the tab',
            },
        ],
    },
];
