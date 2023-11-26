import { THEMES } from './constants/themes';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: THEMES,
    },
} satisfies Config;
