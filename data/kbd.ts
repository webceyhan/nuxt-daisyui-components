import { Description } from '~/components/component-description.vue';
import { SIZE_CLASS_MAP } from '~/components/ui/kbd/kbd.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'kbd',
        props: [
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of kbd',
            },
        ],
    },
];
