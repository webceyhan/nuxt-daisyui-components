import { Description } from '~/components/component-description.vue';
import { ALIGNMENT_CLASS_MAP } from '~/components/ui/navbar/navbar-section.vue';

export const ALIGNMENTS: any[] = Object.keys(ALIGNMENT_CLASS_MAP);

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
