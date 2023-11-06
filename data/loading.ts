import { Description } from '~/components/component-description.vue';
import {
    ANIMATION_CLASS_MAP,
    SIZE_CLASS_MAP,
} from '~/components/ui/loading/loading.vue';

export const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
export const ANIMATIONS: any[] = Object.keys(ANIMATION_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'loading',
        props: [
            {
                name: 'size',
                type: 'string',
                values: SIZES,
            },
            {
                name: 'animation',
                type: 'string',
                values: ANIMATIONS,
            },
        ],
    },
];
