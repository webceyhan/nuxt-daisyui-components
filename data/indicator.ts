import { Description } from '~/components/component-description.vue';
import {
    ALIGNMENT_CLASS_MAP,
    VERTICAL_ALIGNMENT_CLASS_MAP,
} from '~/components/ui/indicator.vue';

export const ALIGNMENTS: any[] = Object.keys(ALIGNMENT_CLASS_MAP);
export const VERTICAL_ALIGNMENTS: any[] = Object.keys(
    VERTICAL_ALIGNMENT_CLASS_MAP
);

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
