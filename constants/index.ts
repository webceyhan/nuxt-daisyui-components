import type {
    Alignment,
    BrandColor,
    Color,
    ColorWithNeural,
    Mask,
    Position,
    Size,
    StateColor,
    VerticalAlignment,
} from '~/components/ui/types';

export const SIZES: Size[] = ['xs', 'sm', 'md', 'lg'];

export const TEXT_SIZES: string[] = [
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
];

export const BRAND_COLORS: BrandColor[] = ['primary', 'secondary', 'accent'];

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
export const COLORS_WITH_NEUTRAL: ColorWithNeural[] = ['neutral', ...COLORS];

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

export const MASKS: Mask[] = [
    'squircle',
    'heart',
    'hexagon',
    'hexagon-2',
    'decagon',
    'pentagon',
    'diamond',
    'square',
    'circle',
    'parallelogram',
    'parallelogram-2',
    'parallelogram-3',
    'parallelogram-4',
    'star',
    'star-2',
    'triangle',
    'triangle-2',
    'triangle-3',
    'triangle-4',
];
