import { Description } from '~/components/component-description.vue';
import { ALIGNMENTS } from '~/constants';

export { ALIGNMENTS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'navbar',
        slots: [
            {
                name: 'default',
                description: 'Content of navbar',
            },
        ],
    },
    {
        name: 'navbar-section',
        props: [
            {
                name: 'alignment',
                type: 'string',
                default: 'start',
                values: ALIGNMENTS,
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of navbar section',
            },
        ],
    },
];
