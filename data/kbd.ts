import { Description } from '~/components/component-description.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'kbd',
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
                description: 'Content of kbd',
            },
        ],
    },
];
