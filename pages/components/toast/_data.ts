import type { Description } from '~/components/component-description.vue';
import { ALIGNMENTS, VERTICAL_ALIGNMENTS } from '~/constants';

export { ALIGNMENTS, VERTICAL_ALIGNMENTS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'toast',
        props: [
            {
                name: 'alignment',
                type: 'string',
                default: 'end',
                values: ALIGNMENTS,
            },
            {
                name: 'vertical-alignment',
                type: 'string',
                default: 'bottom',
                values: VERTICAL_ALIGNMENTS,
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of toast',
            },
        ],
    },
];
