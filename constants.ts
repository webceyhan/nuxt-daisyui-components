import { BrandColor, Color, Size, StateColor } from './components/ui/types';

export const SIZES: Size[] = ['xs', 'sm', 'md', 'lg'];

export const BRAND_COLORS: BrandColor[] = [
    'default',
    'primary',
    'secondary',
    'accent',
];

export const STATE_COLORS: StateColor[] = [
    'info',
    'success',
    'warning',
    'error',
];

export const TEXT_COLORS: string[] = [
    'text-primary',
    'text-secondary',
    'text-accent',
    'text-neutral',
    'text-info',
    'text-success',
    'text-warning',
    'text-error',
];

export const COLORS: Color[] = [...BRAND_COLORS, ...STATE_COLORS];

// for form input elements
export const BRAND_COLORS_WITH_GHOST: any[] = [...BRAND_COLORS, 'ghost'];

// for links and custom elements
export const BRAND_COLORS_WITH_NEUTRAL: any[] = [...BRAND_COLORS, 'neutral'];

// for hoverable elements (badge, button, etc)
export const BRAND_COLORS_WITH_NEUTRAL_AND_GHOST: any[] = [
    ...BRAND_COLORS_WITH_NEUTRAL,
    'ghost',
];
