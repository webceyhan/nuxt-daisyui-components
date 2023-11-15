import { Description } from '~/components/component-description.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'artboard',
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
                description: 'Shows horizontal view',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of artboard',
            },
        ],
    },
];
