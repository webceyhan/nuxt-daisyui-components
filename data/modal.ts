import { Description } from '~/components/component-description.vue';
import { VERTICAL_ALIGNMENT_CLASS_MAP } from '~/components/ui/modal/modal.vue';

export const VERTICAL_ALIGNMENTS: any[] = Object.keys(
    VERTICAL_ALIGNMENT_CLASS_MAP
);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'modal',
        props: [
            {
                name: 'title',
                type: 'string',
                description: 'Title of modal',
            },
            {
                name: 'class',
                type: 'string',
                description: 'Custom classes for modal dialog box',
            },
            {
                name: 'vertical-alignment',
                type: 'string',
                default: 'middle',
                values: VERTICAL_ALIGNMENTS,
            },
            {
                name: 'open',
                type: 'boolean',
                description: 'Open/close the modal using v-model:open',
            },
            {
                name: 'backdrop',
                type: 'boolean',
                description:
                    'The backdrop of modal to close it when clicked outside',
            },
            {
                name: 'dismissable',
                type: 'boolean',
                description: 'Show a close button at top right corner',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of modal',
            },
            {
                name: 'title',
                description: 'Title content of modal',
            },
            {
                name: 'actions',
                description: 'Container for modal action buttons',
            },
        ],
    },
];
