import { Description } from '~/components/component-description.vue';
import { ALIGNMENTS, VERTICAL_ALIGNMENTS } from '~/constants';

export { ALIGNMENTS, VERTICAL_ALIGNMENTS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'indicator',
        props: [
            {
                name: 'item-class',
                type: 'string',
                description: 'Class for the indicator item',
            },
            {
                name: 'alignment',
                type: 'string',
                default: 'end',
                values: ALIGNMENTS,
            },
            {
                name: 'vertical-alignment',
                type: 'string',
                default: 'top',
                values: VERTICAL_ALIGNMENTS,
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of indicator',
            },
            {
                name: 'item',
                description: 'Content of indicator item',
            },
        ],
    },
];
