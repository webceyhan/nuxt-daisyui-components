import { Description } from '~/components/component-description.vue';

export const DESCRIPTIONS: Description[] = [
    {
        name: 'form-control',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label text',
            },
            {
                name: 'alt',
                type: 'string',
                description: 'Alternative label text',
            },
            {
                name: 'inline',
                type: 'boolean',
                description: 'Display label and input inline',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of form control',
            },
        ],
    },
];
