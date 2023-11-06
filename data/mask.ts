import { Description } from '~/components/component-description.vue';
import { MASK_CLASS_MAP } from '~/components/ui/mask.vue';

export const SHAPES: any[] = Object.keys(MASK_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'mask',
        props: [
            {
                name: 'shape',
                type: 'string',
                values: SHAPES,
            },
            {
                name: 'first-half',
                type: 'boolean',
                description: 'Display only the first half of the mask',
            },
            {
                name: 'last-half',
                type: 'boolean',
                description: 'Display only the last half of the mask',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the mask',
            },
        ],
    },
];
