import { THEMES } from '~/constants/themes';

export const useTheme = () => {
    // define active theme state
    const active = ref('dark');

    const change = (theme: string) => {
        // append data-theme to html
        useHead({
            htmlAttrs: {
                'data-theme': theme,
            },
        });

        // set active theme
        active.value = theme;
    };

    return {
        THEMES,
        active,
        change,
    };
};
