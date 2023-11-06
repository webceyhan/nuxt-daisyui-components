import { Description } from '~/components/component-description.vue';
import { INDICATOR_CLASS_MAP } from '~/components/ui/collapse/collapse.vue';

export const INDICATORS: any[] = Object.keys(INDICATOR_CLASS_MAP);

export const DESCRIPTIONS: Description[] = [
    {
        name: 'collapse',
        props: [
            {
                name: "indicator",
                type: "string",
                values: INDICATORS,
              },
              {
                name: "open",
                type: "boolean",
                description: "Force open",
              },
              {
                name: "toggle",
                type: "boolean",
                description: "Whether the collapse works with focus or checkbox",
              },
        ],
        slots: [
            {
                name: "default",
                description: "Content for the collapse",
              },
              {
                name: "title",
                description: "Title for the collapse",
              },
        ],
    },
];
