import {
    Alignment,
    BrandColor,
    Color,
    Indicator,
    Position,
    Shape,
    Size,
    StateColor,
    VerticalAlignment,
} from './types';

export const SIZES: Size[] = ['xs', 'sm', 'md', 'lg'];

export const TEXT_SIZES: string[] = [
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
];

export const SHAPES: Shape[] = ['rectangle', 'square', 'circle'];

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

/**
 * button, badge, link, step
 */
export const COLORS_WITH_NEUTRAL: any[] = [
    'default',
    'neutral',
    ...COLORS.slice(1),
];

export const COLLAPSE_INDICATORS: Indicator[] = ['none', 'arrow', 'plus'];

export const ALIGNMENTS: Alignment[] = ['start', 'center', 'end'];

export const VERTICAL_ALIGNMENTS: VerticalAlignment[] = [
    'top',
    'middle',
    'bottom',
];

export const POSITIONS: Position[] = ['top', 'bottom', 'left', 'right'];

export const STATE_ICONS: string[] = [
    'info-circle',
    'check-circle',
    'exclamation-triangle',
    'x-circle',
];
