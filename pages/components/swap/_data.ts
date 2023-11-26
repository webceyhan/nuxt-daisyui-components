import type { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'swap',
        props: [
            {
                name: 'modelValue',
                description: 'Whether the swap is on or off',
                type: 'string',
            },
            {
                name: 'flip',
                description: 'Flip the swap effect',
                type: 'boolean',
            },
            {
                name: 'rotate',
                description: 'Rotate the swap effect',
                type: 'boolean',
            },
        ],
        slots: [
            {
                name: 'on',
                description: 'Content for the on state',
            },
            {
                name: 'off',
                description: 'Content for the off state',
            },
        ],
    },
];
