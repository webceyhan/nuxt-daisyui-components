import { Description } from '~/components/component-description.vue';
import { STATE_COLORS as COLORS } from '~/constants';

export { COLORS };

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
