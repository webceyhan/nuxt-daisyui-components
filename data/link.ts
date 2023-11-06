import { Description } from '~/components/component-description.vue';
import { COLOR_CLASS_MAP } from '~/components/ui/link/link.vue';

export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'link',
        props: [
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'hover',
                type: 'boolean',
                description: 'Show underline only on hover',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of link',
            },
        ],
    },
];
