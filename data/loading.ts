import { Description } from '~/components/component-description.vue';
import { Animation } from '~/components/ui/loading/loading.vue';
import { SIZES } from '~/constants';

export { SIZES };

export const ANIMATIONS: Animation[] = [
    'spinner',
    'dots',
    'ring',
    'ball',
    'bars',
    'infinity',
];

export const DESCRIPTIONS: Description[] = [
    {
        name: 'loading',
        props: [
            {
                name: 'size',
                type: 'string',
                default: 'md',
                values: SIZES,
            },
            {
                name: 'animation',
                type: 'string',
                default: 'spinner',
                values: ANIMATIONS,
            },
        ],
    },
];
