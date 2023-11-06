import { Description } from '~/components/component-description.vue';
import {
    ALIGNMENT_CLASS_MAP,
    COLOR_CLASS_MAP,
} from '~/components/ui/chat/chat.vue';

export const ALIGNMENTS: any[] = Object.keys(ALIGNMENT_CLASS_MAP);
export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

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
