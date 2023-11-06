import { Description } from '~/components/component-description.vue';
import { SIZE_CLASS_MAP } from '~/components/ui/artboard/artboard.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'artboard',
        props: [
            {
                name: 'size',
                type: 'string',
                default: 'phone-1',
                values: SIZES,
            },
            {
                name: 'horizontal',
                type: 'boolean',
                description: 'Shows horizontal view',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of artboard',
            },
        ],
    },
];
