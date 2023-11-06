import { Description } from '~/components/component-description.vue';
import { COLOR_CLASS_MAP } from '~/components/ui/step/step.vue';

export const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'step-group',
        props: [
            {
                name: 'vertical',
                type: 'boolean',
                description: 'Display steps vertically',
            },
        ],
        slots: [
            {
                name: 'default',
                description: 'Content of the steps',
            },
        ],
    },
    {
        name: 'step',
        props: [
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
                description: 'Content of the step',
            },
        ],
    },
];
