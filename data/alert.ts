import { Description } from '~/components/component-description.vue';
import { COLOR_CLASS_MAP } from '~/components/ui/alert/alert.vue';

export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'alert',
        props: [
            {
                name: 'title',
                type: 'string',
                description: 'Title of alert',
            },
            {
                name: 'message',
                type: 'string',
                description: 'Message of alert',
            },
            {
                name: 'icon',
                type: 'string',
                description: 'Icon name',
            },
            {
                name: 'color',
                type: 'string',
                default: 'default',
                values: COLORS,
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of alert',
            },
            {
                name: 'icon',
                description: 'Icon content of alert',
            },
            {
                name: 'actions',
                description: 'Actions content of alert',
            },
        ],
    },
];
