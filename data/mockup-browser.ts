import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'mockup-browser',
        slots: [
            {
                name: 'default',
                description: 'Content of browser mockup',
            },
            {
                name: 'toolbar',
                description: 'Content of toolbar',
            },
            {
                name: 'input',
                description: 'Content of input',
            },
        ],
    },
];
