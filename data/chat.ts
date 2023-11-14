import { Description } from '~/components/component-description.vue';
import { ALIGNMENTS, COLORS } from '~/constants';

export { ALIGNMENTS, COLORS };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'chat',
        props: [
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
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
                description: 'Content of chat bubble',
            },
            {
                name: 'avatar',
                description: 'Avatar image of chat bubble',
            },
            {
                name: 'header',
                description: 'Header of chat bubble',
            },
            {
                name: 'footer',
                description: 'Footer of chat bubble',
            },
        ],
    },
];
