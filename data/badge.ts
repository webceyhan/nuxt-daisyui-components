import type { Description } from '~/components/component-description.vue';
import { COLORS_WITH_NEUTRAL as COLORS, SIZES } from '~/constants';

export { COLORS, SIZES };

export const DESCRIPTIONS: Description[] = [
    {
        name: 'badge',
        props: [
            {
                name: 'label',
                type: 'string',
                description: 'Label of badge',
            },
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'color',
                type: 'string',
                values: COLORS,
            },
            {
                name: 'ghost',
                type: 'boolean',
                description: 'No background',
            },
            {
                name: 'outline',
                type: 'boolean',
                description: 'Transparent badge with colored border',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of button',
            },
        ],
    },
];
