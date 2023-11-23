import type { Description } from '~/components/component-description.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'tab-nav',
        props: [
            {
                name: 'boxed',
                type: 'boolean',
                description: 'Whether the tabs should be boxed',
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
                name: 'size',
                type: 'Size',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'active',
                type: 'boolean',
                description: 'Whether the tab is active',
            },
            {
                name: 'lifted',
                type: 'boolean',
                description: 'Whether the tab is lifted',
            },
            {
                name: 'bordered',
                type: 'boolean',
                description: 'Whether the tab is bordered',
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
];
